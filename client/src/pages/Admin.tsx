import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { LogOut, FileText, Award, Mail } from "lucide-react";
import { getLoginUrl } from "@/const";
import AdminProjects from "./AdminProjects";
import AdminCertificates from "./AdminCertificates";
// import AdminMessages from "./AdminMessages";

export default function Admin() {
  const { user, logout, isAuthenticated } = useAuth();
  const { data: projects } = trpc.portfolio.projects.list.useQuery();
  const { data: certificates } = trpc.portfolio.certificates.list.useQuery();
  const { data: unreadMessages } = trpc.portfolio.messages.unread.useQuery();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <Card className="p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Área de Administração</h1>
          <p className="text-gray-600 mb-6">
            Você precisa estar autenticado para acessar o painel de administração.
          </p>
          <a href={getLoginUrl()}>
            <Button className="w-full">Fazer Login</Button>
          </a>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Painel de Administração</h1>
            <p className="text-sm text-gray-400 mt-1">Bem-vindo, {user?.name}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => logout()}
            className="gap-2"
          >
            <LogOut size={18} />
            Sair
          </Button>
        </div>
      </header>

      {/* Dashboard Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Projetos</p>
                <p className="text-3xl font-bold mt-2">{projects?.length || 0}</p>
              </div>
              <FileText className="text-blue-500" size={32} />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Certificados</p>
                <p className="text-3xl font-bold mt-2">{certificates?.length || 0}</p>
              </div>
              <Award className="text-green-500" size={32} />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Mensagens Não Lidas</p>
                <p className="text-3xl font-bold mt-2 text-orange-600">
                  {unreadMessages?.length || 0}
                </p>
              </div>
              <Mail className="text-orange-500" size={32} />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projetos</TabsTrigger>
            <TabsTrigger value="certificates">Certificados</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-6">
            <AdminProjects />
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <AdminCertificates />
          </TabsContent>

          <TabsContent value="messages" className="mt-6">
            <div className="text-center py-12">
              <p className="text-gray-600">Página de mensagens em desenvolvimento</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
