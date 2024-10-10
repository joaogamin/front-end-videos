'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { Input } from './ui/input'
const AddVideoDialog: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 rounded bg-blue-900 px-3 py-2 text-sm font-medium text-white hover:bg-blue-950">
          <PlusCircle className="w-4 h-4" />
          Adicionar vídeo
        </button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-none">
        <DialogHeader className="text-white">
          <DialogTitle>Adicionar vídeo</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Esse campo serve para você adicionar um vídeo do YouTube para a
            lista. Insira o link do vídeo desejado e clique no botão Adicionar.
          </DialogDescription>
        </DialogHeader>
        <div className="pb-4 flex flex-row gap-4">
          <Input
            placeholder="Insira a URL do seu vídeo aqui."
            className="bg-zinc-900"
          />
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded bg-blue-900 px-3 py-2 text-sm font-medium text-white hover:bg-blue-950"
          >
            <PlusCircle className="w-4 h-4" />
            Adicionar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default AddVideoDialog
