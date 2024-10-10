'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ArrowsClockwise,
  DotsThreeVertical,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { Input } from './ui/input'
const VideoOptionsDropdown: React.FC =
  () => {
    const [
      openUpdateMenu,
      setOpenupdateMenu,
    ] =
      useState(
        false,
      )
    const [
      openDeleteMenu,
      setOpenDeleteMenu,
    ] =
      useState(
        false,
      )
    const [
      openDropdown,
      setOpenDropdown,
    ] =
      useState(
        false,
      )
    return (
      <DropdownMenu
        open={
          openDropdown
        }
        modal
        onOpenChange={
          setOpenDropdown
        }
      >
        <DropdownMenuTrigger
          asChild
          onClick={() =>
            setOpenDropdown(
              !openDropdown,
            )
          }
        >
          <button className="pr-2">
            <DotsThreeVertical className="w-4 h-4 text-zinc-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Dialog
            open={
              openUpdateMenu
            }
            onOpenChange={
              setOpenupdateMenu
            }
            key="update"
          >
            <DropdownMenuLabel className="text-zinc-200">
              Opções
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DialogTrigger
              onClick={() => {
                setOpenDropdown(
                  true,
                )
                setOpenupdateMenu(
                  true,
                )
              }}
              className="w-full"
            >
              <DropdownMenuItem className="hover:cursor-pointer flex flex-row justify-between items-center gap-2">
                <span className="text-zinc-200">
                  Atualizar
                </span>
                <ArrowsClockwise className="w-4 h-4 text-zinc-200" />
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-none">
              <DialogHeader className="text-white">
                <DialogTitle>
                  Atualizar
                  vídeo
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Esse
                  campo
                  serve
                  para
                  você
                  atualizar
                  o
                  vídeo
                  selecionado.
                  Insira
                  o
                  link
                  do
                  novo
                  vídeo
                  desejado
                  e
                  clique
                  no
                  botão
                  Atualizar.
                </DialogDescription>
              </DialogHeader>
              <div className="pb-4 flex flex-row gap-4">
                <Input
                  placeholder="Insira a URL do seu novo vídeo."
                  className="bg-zinc-900"
                />
                <button
                  onClick={() => {
                    setOpenupdateMenu(
                      false,
                    )
                    setOpenDropdown(
                      false,
                    )
                  }}
                  className="flex items-center gap-2 rounded bg-blue-900 px-3 py-2 text-sm font-medium text-white hover:bg-blue-950"
                >
                  Atualizar
                  <ArrowsClockwise className="w-4 h-4" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={
              openDeleteMenu
            }
            onOpenChange={
              setOpenDeleteMenu
            }
            key="delete"
          >
            <DropdownMenuSeparator />
            <DialogTrigger
              onClick={() => {
                setOpenDropdown(
                  true,
                )
                setOpenDeleteMenu(
                  true,
                )
              }}
              className="w-full"
            >
              <DropdownMenuItem className="hover:cursor-pointer flex flex-row justify-between items-center gap-2">
                <span className="text-zinc-200">
                  Remover
                </span>
                <Trash className="w-4 h-4 text-red-500 z-50 group group-hover:text-red-600:" />
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-none">
              <DialogHeader className="text-white">
                <DialogTitle>
                  Remover
                  vídeo
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Você
                  tem
                  certeza
                  de
                  que
                  deseja
                  remover
                  este
                  vídeo
                  da
                  sua
                  lista?
                </DialogDescription>
              </DialogHeader>
              <div className="pt-8 flex gap-4">
                <button
                  onClick={() => {
                    setOpenDeleteMenu(
                      false,
                    )
                    setOpenDropdown(
                      false,
                    )
                  }}
                  className="ml-auto rounded bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                >
                  Remover
                  vídeo
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
export default VideoOptionsDropdown
