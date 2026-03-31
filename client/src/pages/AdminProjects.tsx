import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export default function AdminProjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    image: string;
    technologies: string;
    link: string;
    type: "individual" | "team";
  }>({
    title: "",
    description: "",
    image: "",
    technologies: "",
    link: "",
    type: "individual",
  });

  const { data: projects, isLoading, refetch } = trpc.portfolio.projects.list.useQuery();
  const createMutation = trpc.portfolio.projects.create.useMutation();
  const updateMutation = trpc.portfolio.projects.update.useMutation();
  const deleteMutation = trpc.portfolio.projects.delete.useMutation();

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
        description: "",
        image: "",
        technologies: "",
        link: "",
        type: "individual",
      });
      setEditingId(null);
      setIsOpen(false);
      refetch();
    } catch (error) {
      console.error("Erro ao salvar projeto:", error);
    }
  };

  const handleEdit = (project: any) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || "",
      technologies: project.technologies,
      link: project.link || "",
      type: project.type,
    });
    setEditingId(project.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja deletar este projeto?")) {
      try {
        await deleteMutation.mutateAsync(id);
        refetch();
      } catch (error) {
        console.error("Erro ao deletar projeto:", error);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      image: "",
      technologies: "",
      link: "",
      type: "individual",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciar Projetos</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={18} />
              Novo Projeto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Editar Projeto" : "Novo Projeto"}
              </DialogTitle>
              <DialogDescription>
                Preencha os detalhes do projeto
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
                  placeholder="Nome do projeto"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Descrição</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Descreva o projeto"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tecnologias</label>
                <Input
                  value={formData.technologies}
                  onChange={(e) =>
                    setFormData({ ...formData, technologies: e.target.value })
                  }
                  placeholder="React, TypeScript, Tailwind (separadas por vírgula)"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Link do Projeto</label>
                <Input
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Tipo</label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: (e.target.value as any) as "individual" | "team",
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="individual">Individual</option>
                  <option value="team">Equipe</option>
                </select>
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
      ) : projects && projects.length > 0 ? (
        <div className="grid gap-4">
          {projects.map((project: any) => (
            <Card key={project.id} className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.split(",").map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Tipo:</span>{" "}
                    <span className="capitalize">{project.type}</span>
                  </div>
                  {project.link && (
                    <div className="mt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Ver Projeto →
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(project)}
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
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
          <p className="text-gray-600">Nenhum projeto cadastrado</p>
        </Card>
      )}
    </div>
  );
}
