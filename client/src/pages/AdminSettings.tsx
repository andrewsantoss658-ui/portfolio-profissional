import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Settings, Upload, Save } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function AdminSettings() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    profileImageUrl: "",
    bio: "",
    location: "",
  });

  useEffect(() => {
    if (!isAuthenticated && user === null) {
      setLocation("/");
    }
  }, [isAuthenticated, user, setLocation]);

  const settingsQuery = trpc.portfolio.settings.get.useQuery();
  const updateMutation = trpc.portfolio.settings.update.useMutation();

  // Carrega dados quando query completa
  useEffect(() => {
    if (settingsQuery.data) {
      setFormData({
        profileImageUrl: settingsQuery.data.profileImageUrl || "",
        bio: settingsQuery.data.bio || "",
        location: settingsQuery.data.location || "",
      });
    }
  }, [settingsQuery.data]);

  const handleSave = async () => {
    try {
      await updateMutation.mutateAsync(formData);
      toast.success("Configurações salvas com sucesso");
    } catch (error) {
      toast.error("Erro ao salvar configurações");
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
            <Settings size={28} style={{ color: "#00D4FF" }} />
            <h1 className="text-3xl font-bold">Configurações</h1>
          </div>
          <p style={{ color: "var(--gray-text)" }}>
            Gerencie informações do seu portfólio
          </p>
        </div>
      </div>

      {/* Settings Form */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div
          className="p-8 rounded-xl border"
          style={{
            background: "var(--graphite)",
            borderColor: "var(--charcoal-light)",
          }}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">
              Foto de Perfil
            </label>
            {formData.profileImageUrl && (
              <div className="mb-4">
                <img
                  src={formData.profileImageUrl}
                  alt="Perfil"
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
            )}
            <input
              type="text"
              placeholder="URL da foto de perfil"
              value={formData.profileImageUrl}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  profileImageUrl: e.target.value,
                })
              }
              className="w-full px-4 py-2 rounded-lg border"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
                color: "oklch(0.93 0.005 240)",
              }}
            />
          </div>

          {/* Bio */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">
              Biografia
            </label>
            <textarea
              placeholder="Descreva-se brevemente"
              value={formData.bio}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bio: e.target.value,
                })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-lg border"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
                color: "oklch(0.93 0.005 240)",
              }}
            />
          </div>

          {/* Location */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">
              Localização
            </label>
            <input
              type="text"
              placeholder="Cidade, País"
              value={formData.location}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  location: e.target.value,
                })
              }
              className="w-full px-4 py-2 rounded-lg border"
              style={{
                background: "var(--charcoal)",
                borderColor: "var(--charcoal-light)",
                color: "oklch(0.93 0.005 240)",
              }}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={updateMutation.isPending}
            className="w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            style={{
              background: "#2ca098",
              color: "white",
              opacity: updateMutation.isPending ? 0.7 : 1,
            }}
          >
            <Save size={18} />
            {updateMutation.isPending ? "Salvando..." : "Salvar Configurações"}
          </button>
        </div>
      </div>
    </div>
  );
}
