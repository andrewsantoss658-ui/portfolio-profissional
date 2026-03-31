import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Mail, Trash2, Check } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function AdminMessages() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated && user === null) {
      setLocation("/");
    }
  }, [isAuthenticated, user, setLocation]);

  const messagesQuery = trpc.portfolio.messages.list.useQuery();
  const markAsReadMutation = trpc.portfolio.messages.markAsRead.useMutation();
  const deleteMutation = trpc.portfolio.messages.delete.useMutation();

  const handleMarkAsRead = async (id: number) => {
    try {
      await markAsReadMutation.mutateAsync(id);
      messagesQuery.refetch();
      toast.success("Mensagem marcada como lida");
    } catch (error) {
      toast.error("Erro ao marcar mensagem como lida");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutateAsync(id);
      messagesQuery.refetch();
      toast.success("Mensagem deletada");
    } catch (error) {
      toast.error("Erro ao deletar mensagem");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--graphite)",
        color: "oklch(0.93 0.005 240)",
      }}
    >
      {/* Header */}
      <div
        className="border-b"
        style={{
          borderColor: "var(--charcoal-light)",
          background: "var(--charcoal)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Mail size={28} style={{ color: "#EF4444" }} />
            <h1 className="text-3xl font-bold">Mensagens de Contato</h1>
          </div>
          <p style={{ color: "var(--gray-text)" }}>
            Total: {messagesQuery.data?.length || 0} mensagens
          </p>
        </div>
      </div>

      {/* Messages List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {messagesQuery.isLoading ? (
          <div className="text-center py-12">
            <p style={{ color: "var(--gray-text)" }}>Carregando mensagens...</p>
          </div>
        ) : messagesQuery.data?.length === 0 ? (
          <div className="text-center py-12">
            <p style={{ color: "var(--gray-text)" }}>Nenhuma mensagem recebida</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messagesQuery.data?.map((message) => (
              <div
                key={message.id}
                className="p-6 rounded-xl border"
                style={{
                  background: "var(--graphite)",
                  borderColor: message.read ? "var(--charcoal-light)" : "#EF4444",
                  borderWidth: message.read ? "1px" : "2px",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{message.name}</h3>
                    <p style={{ color: "var(--gray-text)" }} className="text-sm">
                      {message.email}
                      {message.phone && ` • ${message.phone}`}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!message.read && (
                      <button
                        onClick={() => handleMarkAsRead(message.id)}
                        className="p-2 rounded-lg transition-all duration-300"
                        style={{
                          background: "#EF444415",
                        }}
                        title="Marcar como lida"
                      >
                        <Check size={18} style={{ color: "#EF4444" }} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="p-2 rounded-lg transition-all duration-300"
                      style={{
                        background: "#EF444415",
                      }}
                      title="Deletar"
                    >
                      <Trash2 size={18} style={{ color: "#EF4444" }} />
                    </button>
                  </div>
                </div>
                <p className="mb-4">{message.message}</p>
                <p style={{ color: "var(--gray-text)" }} className="text-xs">
                  {new Date(message.createdAt).toLocaleString("pt-BR")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
