import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import * as db from "./db";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  portfolio: router({
    // Projetos
    projects: router({
      list: publicProcedure.query(() => db.getProjects()),
      byId: publicProcedure.input(z.number()).query(({ input }) => db.getProjectById(input)),
      create: protectedProcedure
        .input(z.object({
          title: z.string(),
          description: z.string(),
          image: z.string().optional(),
          technologies: z.string(),
          link: z.string().optional(),
          type: z.enum(["individual", "team"]),
        }))
        .mutation(({ input }) => db.createProject(input)),
      update: protectedProcedure
        .input(z.object({
          id: z.number(),
          data: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            image: z.string().optional(),
            technologies: z.string().optional(),
            link: z.string().optional(),
            type: z.enum(["individual", "team"]).optional(),
          }),
        }))
        .mutation(({ input }) => db.updateProject(input.id, input.data)),
      delete: protectedProcedure
        .input(z.number())
        .mutation(({ input }) => db.deleteProject(input)),
    }),

    // Certificados
    certificates: router({
      list: publicProcedure.query(() => db.getCertificates()),
      byId: publicProcedure.input(z.number()).query(({ input }) => db.getCertificateById(input)),
      create: protectedProcedure
        .input(z.object({
          title: z.string(),
          issuer: z.string(),
          category: z.string(),
          date: z.string(),
          link: z.string().optional(),
        }))
        .mutation(({ input }) => db.createCertificate(input)),
      update: protectedProcedure
        .input(z.object({
          id: z.number(),
          data: z.object({
            title: z.string().optional(),
            issuer: z.string().optional(),
            category: z.string().optional(),
            date: z.string().optional(),
            link: z.string().optional(),
          }),
        }))
        .mutation(({ input }) => db.updateCertificate(input.id, input.data)),
      delete: protectedProcedure
        .input(z.number())
        .mutation(({ input }) => db.deleteCertificate(input)),
    }),

    // Mensagens de Contato
    messages: router({
      list: protectedProcedure.query(() => db.getContactMessages()),
      unread: protectedProcedure.query(() => db.getUnreadMessages()),
      create: publicProcedure
        .input(z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          message: z.string(),
        }))
        .mutation(({ input }) => db.createContactMessage(input)),
      markAsRead: protectedProcedure
        .input(z.number())
        .mutation(({ input }) => db.markMessageAsRead(input)),
      delete: protectedProcedure
        .input(z.number())
        .mutation(({ input }) => db.deleteContactMessage(input)),
    }),

    // Configurações do Portfólio
    settings: router({
      get: protectedProcedure.query(({ ctx }) => db.getPortfolioSettings(ctx.user.id)),
      create: protectedProcedure
        .input(z.object({
          profileImageUrl: z.string().optional(),
          bio: z.string().optional(),
          location: z.string().optional(),
        }))
        .mutation(({ ctx, input }) => db.createPortfolioSettings({ userId: ctx.user.id, ...input })),
      update: protectedProcedure
        .input(z.object({
          profileImageUrl: z.string().optional(),
          bio: z.string().optional(),
          location: z.string().optional(),
        }))
        .mutation(({ ctx, input }) => db.updatePortfolioSettings(ctx.user.id, input)),
    }),
  }),
});

export type AppRouter = typeof appRouter;
