const appCorporativa =
{
    async criarLista(parametros)
    {
        const dl = document.getElementById(parametros.idLista);
        if(!dl)
        {
            console.error("Lista com o ID informado não foi encontrada:", parametros.idLista);
            return;

        }

        dl.innerHTML = "";

        try
        {
            let headers = {"Content-Type": "application/json"};
            if(parametros.token)
            {
                headers["Authorization"] = "Bearer " + parametros.token;
                
            }

            const resposta = await fetch(parametros.url, {method: "GET", mode: 'cors', headers: headers});
            if(!resposta.ok)
                throw new Error("Erro ao buscar dados da URL: " + parametros.url);
            const dados = await resposta.json();

            dados.forEach(item =>
            {
                const divRegistro = document.createElement("div");
                divRegistro.classList.add("lista-registro")

                const divDados = document.createElement("div");
                divDados.classList.add("lista-dados");
                divRegistro.appendChild(divDados);

                parametros.linhas.forEach(linha =>
                {
                    let valor = linha.dado.split('.').reduce((obj, chave) => obj && obj[chave], item);
                    if(Array.isArray(valor))
                    {
                        valor = valor.map(item => item.nome).join(", ")

                    }

                    if(linha.titulo == "ID")
                    {
                        const dt = document.createElement("dt");
                        dt.textContent = linha.titulo + ": " + valor;
                        divDados.appendChild(dt);

                    }
                    else
                    {
                        if(valor != null)
                        {
                            const dd = document.createElement("dd");
                            dd.textContent = linha.titulo + ": " + valor ?? "";
                            divDados.appendChild(dd);

                        }
                        
                    }
                    
                    divRegistro.appendChild(divDados);

                });

                if(parametros.exibeEditar || parametros.exibeRemover)
                {
                    const divBotoes = document.createElement("div");
                    divBotoes.classList.add("lista-botoes");
                    divRegistro.appendChild(divBotoes);
                    
                    const idItem = item[parametros.idEnvio || "id"];

                    if(parametros.exibeEditar)
                    {
                        const btnEditar = document.createElement("a");
                        btnEditar.textContent = "Editar";
                        btnEditar.onclick = () =>
                        {
                            window.location.href = parametros.urlEditar + idItem;

                        };
                        divBotoes.appendChild(btnEditar);

                    }

                    if(parametros.exibeRemover)
                    {
                        const btnRemover = document.createElement("a");
                        btnRemover.textContent = "Remover";
                        btnRemover.onclick = async() =>
                        {
                            if(confirm("Deseja realmente remover este registro?"))
                            {
                                let headers = {"Content-Type": "application/json"};
                                if(parametros.token)
                                    headers["Authorization"] = "Bearer " + parametros.token;

                                const resp = await fetch(parametros.urlRemover + "/" + idItem, {method: "DELETE", headers: headers});
                                if(resp.ok)
                                {
                                    alert("Registro removido com sucesso!");
                                    appCorporativa.criarLista(parametros);

                                }
                                else
                                {
                                    alert("Erro ao remover registro.");

                                }

                            }

                        };
                        divBotoes.appendChild(btnRemover);

                    }

                    divRegistro.appendChild(divBotoes);

                }

                dl.appendChild(divRegistro);

            });

        }
        catch(erro)
        {
            console.error("Erro ao carregar dados:", erro);
            
        }
    },


    async criarFormulario(parametros)
    {
        console.log("Carregando Formulário....");
        const form = document.getElementById(parametros.idFormulario);
        if(!form)
        {
            console.error("Elemento de destino não encontrado:", parametros.idFormulario);
            return;

        }

        form.innerHTML = "";

        const divFormulario = document.createElement("div");
        divFormulario.classList.add("principal-formulario")

        const urlParams = new URLSearchParams(window.location.search);
        const idEdicao = urlParams.get("id");

        for(const col of parametros.campos)
        {
            const divContainer = document.createElement("div");
            form.appendChild(divContainer);
            if(col.tipo != "oculto")
            {
                const label = document.createElement("label");
                label.textContent = col.titulo + ": ";
                label.style.display = "block";
                divContainer.appendChild(label);

            }

            let input;
            if(col.tipo === "relacionamento")
            {
                input = document.createElement("select");
                input.name = col.dado;
                input.id = col.dado;

                const optGenerico = document.createElement("option");
                optGenerico.value = "";
                optGenerico.textContent = "Selecione...";
                input.appendChild(optGenerico);

                if(col.obrigatorio)
                    input.required = true;

                try
                {
                    let headers = {"Content-Type": "application/json"};
                    if(parametros.token)
                    {
                        headers["Authorization"] = "Bearer " + parametros.token;

                    }

                    const resp = await fetch(col.urlConsulta, {headers: headers});
                    const dados = await resp.json();
                    dados.forEach(op =>
                    {
                        const opt = document.createElement("option");
                        const nomeRel = col.dadoExibicao.split('.');
                        opt.value = op.id;
                        opt.textContent = op[nomeRel[1]];
                        input.appendChild(opt);

                    });

                }
                catch(e)
                {
                    console.error("Erro ao carregar relacionamento:", e);
                }

            }
            else if(col.tipo === "textarea" || col.tipo === "textoLongo")
            {
                input = document.createElement("textarea");
                input.name = col.dado;
                input.id = col.dado;
                if(col.obrigatorio)
                    input.required = true;

            }
            else if(col.tipo === "selecao")
            {
                input = document.createElement("select");
                input.name = col.dado;
                input.id = col.dado;

                const optGenerico = document.createElement("option");
                optGenerico.value = "";
                optGenerico.textContent = "Selecione...";
                input.appendChild(optGenerico);

                col.opcoes.forEach(opcao =>
                {
                    const opt = document.createElement("option");
                    opt.value = opcao.valor;
                    opt.textContent = opcao.nome;
                    input.appendChild(opt);

                });

                if(col.obrigatorio)
                    input.required = true;

            }
            else
            {
                input = document.createElement("input");
                input.name = col.dado;
                input.id = col.dado;
                input.placeholder = col.titulo;
                if(col.obrigatorio)
                    input.required = true;

                switch(col.tipo)
                {
                    case "numero":
                        input.type = "number";
                        break;
                    case "email":
                        input.type = "email";
                        break;
                    case "senha":
                        input.type = "password";
                        break;
                    case "texto":
                        input.type = "text";
                        break;
                    case "oculto":
                        input.type = "hidden";
                        break;
                    case "ano":
                        input.type = "number";
                        input.min = "1900";
                        input.max = new Date().getFullYear();
                        break;
                    default:
                        input.type = "text";

                }

            }

            divContainer.appendChild(input);
            divFormulario.appendChild(divContainer);

        }

        const divBotao = document.createElement("div");
        const botao = document.createElement("button");
        botao.textContent = idEdicao ? "Atualizar" : "Cadastrar";
        botao.type = "submit";

        divBotao.appendChild(botao);
        divFormulario.appendChild(divBotao);
        form.appendChild(divFormulario);

        if(idEdicao)
        {
            console.log("Edição"+ idEdicao);
            try
            {
                let headers = {"Content-Type": "application/json"};
                if(parametros.token)
                {
                    headers["Authorization"] = "Bearer " + parametros.token;

                }

                const resp = await fetch(parametros.urlCargaDados.replace("id=", "") + idEdicao, {headers: headers});
                if(resp.ok)
                {
                    const dados = await resp.json();
                    console.log("Dados retornados", dados);
                    parametros.colunas.forEach(col =>
                    {
                        const campo = form.querySelector(`[name='${col.dado}']`);
                        if(campo)
                        {
                            const valor = col.dado.split('.').reduce((obj, chave) => obj && obj[chave], dados);
                            campo.value = valor ?? "";

                        }

                    });

                }

            }
            catch (e)
            {
                console.error("Erro ao carregar dados do registro:", e);

            }

        }


        form.addEventListener("submit", async e =>
        {
            e.preventDefault();
            const obj = {};

            const produtoTipo = form.querySelector("[name='produtoTipo']")?.value;

            parametros.campos.forEach(col =>
            {
                const valor = form.querySelector(`[name='${col.dado}']`).value;
                if(col.tipo === "relacionamento")
                {
                    if(valor && valor.trim() !== "")
                    {
                        obj[col.dado] = {id: parseInt(valor), tipo: col.dado};

                        if(col.dado === "produto" && produtoTipo)
                            obj[col.dado].tipo = produtoTipo;

                    }

                }
                else
                {
                    obj[col.dado] = valor;

                }

            });

            const metodo = idEdicao ? "PUT" : "POST";
            const urlEnvio = idEdicao ? parametros.urlEditar + idEdicao : parametros.urlCadastrar;

            try
            {
                let headers = {"Content-Type": "application/json"};
                if(parametros.token)
                {
                    headers["Authorization"] = "Bearer " + parametros.token;

                }

                const resp = await fetch(urlEnvio,
                {
                    method: metodo,
                    headers: headers,
                    body: JSON.stringify(obj)

                });
                
                if(resp.ok)
                {
                    alert(idEdicao ? "Registro atualizado com sucesso!" : "Registro cadastrado com sucesso!");
                    form.reset();
                    window.location.href = "./lista.html";

                }
                else
                {
                    alert("Erro ao salvar registro.");

                }

            }
            catch(e)
            {
                console.error("Erro ao enviar formulário:", e);

            }

        });

    }
    
};
