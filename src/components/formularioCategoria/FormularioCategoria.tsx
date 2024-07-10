import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categorias from '../../models/Categorias';
import { buscar, atualizar, cadastrar } from '../../service/Service';
import { AuthContext } from '../../contexts/AuthContext';



function FormularioCategoria() {


        const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
      
        let navigate = useNavigate();
      
        const { id } = useParams<{ id: string }>();
      
        const { usuario, handleLogout } = useContext(AuthContext);
        const token = usuario.token;
      
        async function buscarPorId(id: string) {
          await buscar(`/categoria/${id}`, setCategorias, {
            headers: {
              Authorization: token,
            },
          });
        }
      
        useEffect(() => {
          if (id !== undefined) {
            buscarPorId(id)
          }
        }, [id])
      
        function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
          setCategorias({
            ...categorias,
            [e.target.name]: e.target.value
          })
      
          console.log(JSON.stringify(categorias))
        }
      
        async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
          e.preventDefault()
      
          if (id !== undefined) {
            try {
              await atualizar(`/categoria`, categorias, setCategorias, {
                headers: {
                  'Authorization': token
                }
              })
      
              alert('Categoria atualizada com sucesso')
              retornar()
      
            } catch (error: any) {
              if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
              } else {
                alert('Erro ao atualizar a Categoria')
              }
      
            }
      
          } else {
            try {
              await cadastrar(`/categoria`, categorias, setCategorias, {
                headers: {
                  'Authorization': token
                }
              })
      
              alert('Categoria cadastrada com sucesso')
      
            } catch (error: any) {
              if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
              } else {
                alert('Erro ao cadastrado a Categoria')
              }
            }
          }
      
          retornar()
        }
      
        function retornar() {
          navigate("/categorias")
        }
      
        useEffect(() => {
          if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
          }
        }, [token]);


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
            <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Tipo</label>
                    <input
                        type="text"
                        placeholder="Tipo"
                        name='tipo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Especificação</label>
                    <input
                        type="text"
                        placeholder="Especificação"
                        name='especificacao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categorias.especificacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;