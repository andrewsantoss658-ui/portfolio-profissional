import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

import { desc } from "drizzle-orm";
import { projects, certificates, contactMessages, portfolioSettings, InsertProject, InsertCertificate, InsertContactMessage, InsertPortfolioSettings } from "../drizzle/schema";

// ============================================================
// Projetos
// ============================================================
export async function getProjects() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(projects).orderBy(desc(projects.createdAt));
}

export async function getProjectById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createProject(data: InsertProject) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(projects).values(data);
}

export async function updateProject(id: number, data: Partial<InsertProject>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(projects).set(data).where(eq(projects.id, id));
}

export async function deleteProject(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(projects).where(eq(projects.id, id));
}

// ============================================================
// Certificados
// ============================================================
export async function getCertificates() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(certificates).orderBy(desc(certificates.createdAt));
}

export async function getCertificateById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(certificates).where(eq(certificates.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createCertificate(data: InsertCertificate) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(certificates).values(data);
}

export async function updateCertificate(id: number, data: Partial<InsertCertificate>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(certificates).set(data).where(eq(certificates.id, id));
}

export async function deleteCertificate(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(certificates).where(eq(certificates.id, id));
}

// ============================================================
// Mensagens de Contato
// ============================================================
export async function getContactMessages() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
}

export async function getUnreadMessages() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactMessages).where(eq(contactMessages.read, 0)).orderBy(desc(contactMessages.createdAt));
}

export async function createContactMessage(data: InsertContactMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(contactMessages).values(data);
}

export async function markMessageAsRead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(contactMessages).set({ read: 1 }).where(eq(contactMessages.id, id));
}

export async function deleteContactMessage(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(contactMessages).where(eq(contactMessages.id, id));
}

// ============================================================
// Configurações do Portfólio
// ============================================================
export async function getPortfolioSettings(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(portfolioSettings).where(eq(portfolioSettings.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createPortfolioSettings(data: InsertPortfolioSettings) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(portfolioSettings).values(data);
}

export async function updatePortfolioSettings(userId: number, data: Partial<InsertPortfolioSettings>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(portfolioSettings).set(data).where(eq(portfolioSettings.userId, userId));
}
