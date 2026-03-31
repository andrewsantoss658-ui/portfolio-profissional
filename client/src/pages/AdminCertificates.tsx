import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trash2, Edit2, Plus, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminCertificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    category: "",
    date: "",
    link: "",
  });

  const { data: certificates, isLoading, refetch } = trpc.portfolio.certificates.list.useQuery();
  const createMutation = trpc.portfolio.certificates.create.useMutation();
  const updateMutation = trpc.portfolio.certificates.update.useMutation();
  const deleteMutation = trpc.portfolio.certificates.delete.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          data: formData,
        });
      } else {
        await createMutation.mutateAsync(formData);
      }

      setFormData({
        title: "",
        issuer: "",
        category: "",
        date: "",
        link: "",
      });
      setEditingId(null);
      setIsOpen(false);
      refetch();
    } catch (error) {
      console.error("Erro ao salvar certificado:", error);
    }
  };

  const handleEdit = (cert: any) => {
    setFormData({
      title: cert.title,
      issuer: cert.issuer,
      category: cert.category,
      date: cert.date,
      link: cert.link || "",
    });
    setEditingId(cert.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja deletar este certificado?")) {
      try {
        await deleteMutation.mutateAsync(id);
        refetch();
      } catch (error) {
        console.error("Erro ao deletar certificado:", error);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      title: "",
      issuer: "",
      category: "",
      date: "",
      link: "",
    });
  };

  const categoryColors: Record<string, string> = {
    "Certificação": "bg-blue-100 text-blue-800",
    "Licença": "bg-green-100 text-green-800",
    "Curso": "bg-purple-100 text-purple-800",
    "Treinamento": "bg-orange-100 text-orange-800",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciar Certificados</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={18} />
              Novo Certificado
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Editar Certificado" : "Novo Certificado"}
              </DialogTitle>
              <DialogDescription>
                Preencha os detalhes do certificado
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Nome do certificado"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Emissor</label>
                <Input
                  value={formData.issuer}
                  onChange={(e) =>
                    setFormData({ ...formData, issuer: e.target.value })
                  }
                  placeholder="Organização ou instituição"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Categoria</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Certificação">Certificação</option>
                  <option value="Licença">Licença</option>
                  <option value="Curso">Curso</option>
                  <option value="Treinamento">Treinamento</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Data</label>
                <Input
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  placeholder="MM/YYYY ou YYYY"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Link (Opcional)</label>
                <Input
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {createMutation.isPending || updateMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={18} />
                      Salvando...
                    </>
                  ) : (
                    "Salvar"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : certificates && certificates.length > 0 ? (
        <div className="grid gap-4">
          {certificates.map((cert: any) => (
            <Card key={cert.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded font-medium ${categoryColors[cert.category] || "bg-gray-100 text-gray-800"}`}>
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mt-1">Data: {cert.date}</p>
                  {cert.link && (
                    <div className="mt-2">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Verificar Certificado →
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(cert)}
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(cert.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <p className="text-gray-600">Nenhum certificado cadastrado</p>
        </Card>
      )}
    </div>
  );
}
