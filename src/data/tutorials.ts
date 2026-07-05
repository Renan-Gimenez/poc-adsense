import type { Tutorial } from "../types/tutorial";

export const tutorials: Tutorial[] = [
  {
    id: "1",
    slug: "como-funciona-o-metodo-split-em-js",
    title: "Como funciona o método split() em JavaScript",
    description:
      "Entenda como o método split() divide strings em arrays, com exemplos práticos e casos de uso reais.",
    language: "javascript",
    tags: ["strings", "array", "métodos nativos"],
    author: "DevTips",
    publishedAt: "2026-06-20",
    readingTimeMinutes: 5,
    content: `
# Como funciona o método \`split()\` em JavaScript

O método \`split()\` é um dos mais utilizados quando trabalhamos com strings em JavaScript. Ele divide uma string em um **array de substrings**, com base em um separador que você define.

## Sintaxe

\`\`\`javascript
string.split(separator, limit)
\`\`\`

- **separator** *(opcional)*: Define onde a divisão ocorrerá. Pode ser uma string ou expressão regular.
- **limit** *(opcional)*: Limita o número de elementos no array resultante.

## Exemplos básicos

### Dividindo por espaço

\`\`\`javascript
const frase = "Olá mundo JavaScript";
const palavras = frase.split(" ");

console.log(palavras);
// ["Olá", "mundo", "JavaScript"]
\`\`\`

### Dividindo por vírgula

\`\`\`javascript
const csv = "João,Maria,Carlos,Ana";
const nomes = csv.split(",");

console.log(nomes);
// ["João", "Maria", "Carlos", "Ana"]
\`\`\`

### Dividindo cada caractere

\`\`\`javascript
const palavra = "React";
const letras = palavra.split("");

console.log(letras);
// ["R", "e", "a", "c", "t"]
\`\`\`

## Usando o parâmetro limit

\`\`\`javascript
const texto = "um dois três quatro cinco";
const limitado = texto.split(" ", 3);

console.log(limitado);
// ["um", "dois", "três"]
\`\`\`

## Usando com Expressões Regulares

\`\`\`javascript
const frase = "Hoje é   um   dia   bonito";
const palavras = frase.split(/\s+/);

console.log(palavras);
// ["Hoje", "é", "um", "dia", "bonito"]
\`\`\`

> **Dica:** Quando o separador não é encontrado na string, o resultado é um array com a string original como único elemento.

## Caso prático: Parse de URL

\`\`\`javascript
const url = "https://devtips.com/tutoriais/javascript/split";
const partes = url.split("/");

console.log(partes);
// ["https:", "", "devtips.com", "tutoriais", "javascript", "split"]

const slug = partes[partes.length - 1];
console.log(slug); // "split"
\`\`\`

## Conclusão

O \`split()\` é simples, mas extremamente poderoso. Dominando-o, você consegue processar textos, parsear dados e manipular strings de forma eficiente no dia a dia do desenvolvimento.
`,
  },
  {
    id: "2",
    slug: "arrow-functions-vs-funcoes-tradicionais",
    title: "Arrow Functions vs Funções Tradicionais em JS",
    description:
      "Descubra as diferenças entre arrow functions e funções tradicionais, quando usar cada uma e como o this se comporta.",
    language: "javascript",
    tags: ["arrow function", "this", "ES6"],
    author: "DevTips",
    publishedAt: "2026-06-25",
    readingTimeMinutes: 7,
    content: `
# Arrow Functions vs Funções Tradicionais em JavaScript

Uma das mudanças mais significativas do ES6 foi a introdução das **arrow functions**. Mas quando usar uma e quando usar a outra?

## Sintaxe

### Função tradicional

\`\`\`javascript
function somar(a, b) {
  return a + b;
}
\`\`\`

### Arrow Function

\`\`\`javascript
const somar = (a, b) => a + b;
\`\`\`

## A principal diferença: o \`this\`

A grande diferença está em como o \`this\` é tratado.

### Função tradicional — \`this\` dinâmico

\`\`\`javascript
function Contador() {
  this.valor = 0;

  setInterval(function () {
    this.valor++; // ❌ this aqui é window/undefined
    console.log(this.valor);
  }, 1000);
}
\`\`\`

### Arrow Function — \`this\` léxico

\`\`\`javascript
function Contador() {
  this.valor = 0;

  setInterval(() => {
    this.valor++; // ✅ this herda do escopo externo
    console.log(this.valor);
  }, 1000);
}
\`\`\`

## Quando NÃO usar Arrow Functions

1. **Métodos de objetos** que precisam do próprio \`this\`
2. **Construtores** (arrow functions não podem ser usadas com \`new\`)
3. **Funções com \`arguments\`** (arrow functions não têm o objeto arguments)

\`\`\`javascript
// ❌ Evite
const obj = {
  nome: "DevTips",
  saudacao: () => {
    return \`Olá, \${this.nome}\`; // this não é obj
  },
};

// ✅ Prefira
const obj = {
  nome: "DevTips",
  saudacao() {
    return \`Olá, \${this.nome}\`; // this é obj
  },
};
\`\`\`

## Resumo

| Característica | Função Tradicional | Arrow Function |
|---|---|---|
| \`this\` | Dinâmico | Léxico (herda) |
| \`arguments\` | ✅ Sim | ❌ Não |
| Construtor (\`new\`) | ✅ Sim | ❌ Não |
| Sintaxe | Verbosa | Concisa |

Escolha com sabedoria baseado no contexto!
`,
  },
  {
    id: "3",
    slug: "list-comprehension-em-python",
    title: "List Comprehension em Python — Guia Completo",
    description:
      "Aprenda a criar listas de forma elegante e eficiente usando list comprehension, uma das features mais poderosas do Python.",
    language: "python",
    tags: ["listas", "comprehension", "pythonic"],
    author: "DevTips",
    publishedAt: "2026-06-22",
    readingTimeMinutes: 6,
    content: `
# List Comprehension em Python — Guia Completo

List comprehension é uma das features mais elegantes do Python. Ela permite criar listas de forma **concisa e legível** em uma única linha.

## Sintaxe básica

\`\`\`python
nova_lista = [expressão for item in iterável if condição]
\`\`\`

## Comparação com loop tradicional

### Loop tradicional

\`\`\`python
quadrados = []
for x in range(10):
    quadrados.append(x ** 2)

print(quadrados)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

### Com list comprehension

\`\`\`python
quadrados = [x ** 2 for x in range(10)]

print(quadrados)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

## Filtrando com condição

\`\`\`python
# Apenas números pares
pares = [x for x in range(20) if x % 2 == 0]

print(pares)
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
\`\`\`

## Transformando strings

\`\`\`python
frutas = ["maçã", "banana", "laranja", "uva"]
maiusculas = [fruta.upper() for fruta in frutas]

print(maiusculas)
# ["MAÇÃ", "BANANA", "LARANJA", "UVA"]
\`\`\`

## Nested List Comprehension

\`\`\`python
# Matriz 3x3
matriz = [[i * j for j in range(1, 4)] for i in range(1, 4)]

print(matriz)
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
\`\`\`

## Dict e Set Comprehension

\`\`\`python
# Dict comprehension
quadrados_dict = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Set comprehension
letras = {char.lower() for char in "Python É Incrível"}
# {'p', 'y', 't', 'h', 'o', 'n', 'é', 'i', 'c', 'r', 'v', 'l'}
\`\`\`

> **Dica:** Embora list comprehensions sejam poderosas, evite usá-las quando a lógica é muito complexa. Nesses casos, um loop tradicional é mais legível.

## Performance

\`\`\`python
import timeit

# List comprehension é geralmente mais rápida que append em loop
lc = timeit.timeit("[x**2 for x in range(1000)]", number=10000)
loop = timeit.timeit("""
result = []
for x in range(1000):
    result.append(x**2)
""", number=10000)

print(f"List Comprehension: {lc:.3f}s")
print(f"Loop tradicional: {loop:.3f}s")
\`\`\`

## Conclusão

List comprehension é uma ferramenta essencial no arsenal de todo desenvolvedor Python. Use-a para tornar seu código mais **pythonic**, legível e eficiente.
`,
  },
  {
    id: "4",
    slug: "decoradores-em-python",
    title: "Decoradores em Python — O que são e como usar",
    description:
      "Entenda o conceito de decoradores (decorators) em Python, como criá-los e como eles são amplamente usados em frameworks como Flask e Django.",
    language: "python",
    tags: ["decorator", "funções", "avançado"],
    author: "DevTips",
    publishedAt: "2026-06-28",
    readingTimeMinutes: 8,
    content: `
# Decoradores em Python — O que são e como usar

Decoradores são um dos conceitos mais poderosos e elegantes do Python. Eles permitem **modificar ou estender o comportamento de funções** sem alterar seu código.

## O conceito

Em Python, funções são cidadãos de primeira classe — podem ser passadas como argumentos e retornadas de outras funções.

\`\`\`python
def meu_decorador(func):
    def wrapper():
        print("Antes da função")
        func()
        print("Depois da função")
    return wrapper

def saudacao():
    print("Olá, mundo!")

saudacao = meu_decorador(saudacao)
saudacao()
# Antes da função
# Olá, mundo!
# Depois da função
\`\`\`

## Sintaxe com @

O Python oferece a sintaxe \`@\` para aplicar decoradores de forma limpa:

\`\`\`python
def meu_decorador(func):
    def wrapper():
        print("Antes da função")
        func()
        print("Depois da função")
    return wrapper

@meu_decorador
def saudacao():
    print("Olá, mundo!")

saudacao()
\`\`\`

## Decoradores com argumentos

\`\`\`python
import functools

def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Chamando {func.__name__} com args={args}, kwargs={kwargs}")
        resultado = func(*args, **kwargs)
        print(f"{func.__name__} retornou {resultado}")
        return resultado
    return wrapper

@log
def somar(a, b):
    return a + b

somar(3, 5)
# Chamando somar com args=(3, 5), kwargs={}
# somar retornou 8
\`\`\`

> **Importante:** Use sempre \`@functools.wraps(func)\` para preservar os metadados da função original.

## Decoradores no mundo real

### Medir tempo de execução

\`\`\`python
import time
import functools

def medir_tempo(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = func(*args, **kwargs)
        fim = time.perf_counter()
        print(f"{func.__name__} executou em {fim - inicio:.4f}s")
        return resultado
    return wrapper

@medir_tempo
def processo_pesado():
    time.sleep(1.5)
    return "concluído"

processo_pesado()
# processo_pesado executou em 1.5001s
\`\`\`

### Em Flask (framework web)

\`\`\`python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Bem-vindo!"

@app.route("/sobre")
def sobre():
    return "Sobre nós"
\`\`\`

## Conclusão

Decoradores são fundamentais no Python moderno. Entendê-los abre as portas para compreender frameworks inteiros como Flask, Django, FastAPI e muito mais.
`,
  },
  {
    id: "5",
    slug: "useState-e-useEffect-na-pratica",
    title: "useState e useEffect na prática com React",
    description:
      "Domine os dois hooks mais importantes do React com exemplos reais de busca de dados, formulários e efeitos colaterais.",
    language: "react",
    tags: ["hooks", "useState", "useEffect"],
    author: "DevTips",
    publishedAt: "2026-06-18",
    readingTimeMinutes: 9,
    content: `
# useState e useEffect na prática com React

Os hooks \`useState\` e \`useEffect\` são a base do desenvolvimento com React moderno. Neste tutorial, vamos explorar casos de uso reais.

## useState — Gerenciando estado local

### Sintaxe

\`\`\`tsx
const [estado, setEstado] = useState(valorInicial);
\`\`\`

### Exemplo: Contador

\`\`\`tsx
import { useState } from "react";

export function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Incrementar
      </button>
      <button onClick={() => setContagem(0)}>
        Resetar
      </button>
    </div>
  );
}
\`\`\`

### Estado com objetos

\`\`\`tsx
const [usuario, setUsuario] = useState({
  nome: "",
  email: "",
});

// ✅ Sempre espalhe o estado anterior
const atualizarNome = (novoNome: string) => {
  setUsuario((prev) => ({ ...prev, nome: novoNome }));
};
\`\`\`

## useEffect — Efeitos colaterais

### Sintaxe

\`\`\`tsx
useEffect(() => {
  // código do efeito
  return () => {
    // cleanup (opcional)
  };
}, [dependências]);
\`\`\`

### Exemplo: Buscar dados de uma API

\`\`\`tsx
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        setErro("Erro ao carregar posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // [] = executa apenas uma vez ao montar

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Cleanup — evitando memory leaks

\`\`\`tsx
useEffect(() => {
  const intervalo = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(intervalo); // ✅ cleanup
}, []);
\`\`\`

## Regras dos Hooks

1. **Apenas no nível superior** — não use dentro de loops, condicionais ou funções aninhadas
2. **Apenas em componentes React** ou hooks customizados

> **Dica:** Instale o plugin ESLint \`eslint-plugin-react-hooks\` para garantir que está seguindo as regras.

## Conclusão

\`useState\` e \`useEffect\` são a fundação do React moderno. Dominar esses dois hooks é o primeiro grande passo para se tornar um desenvolvedor React eficiente.
`,
  },
  {
    id: "6",
    slug: "context-api-gerenciamento-de-estado-global",
    title: "Context API — Gerenciamento de Estado Global no React",
    description:
      "Aprenda a usar a Context API do React para compartilhar estado entre componentes sem prop drilling, com exemplos de tema e autenticação.",
    language: "react",
    tags: ["context", "estado global", "hooks"],
    author: "DevTips",
    publishedAt: "2026-07-01",
    readingTimeMinutes: 10,
    content: `
# Context API — Gerenciamento de Estado Global no React

A Context API resolve um dos problemas mais comuns do React: **prop drilling** — passar props por múltiplos níveis de componentes só para chegar ao destino.

## O problema — Prop Drilling

\`\`\`tsx
// ❌ Prop drilling — tema precisa passar por todos os componentes
function App() {
  const [tema, setTema] = useState("dark");
  return <Layout tema={tema} setTema={setTema} />;
}

function Layout({ tema, setTema }) {
  return <Header tema={tema} setTema={setTema} />;
}

function Header({ tema, setTema }) {
  return <BotaoTema tema={tema} setTema={setTema} />;
}
\`\`\`

## A solução — Context API

### 1. Criando o Context

\`\`\`tsx
import { createContext, useContext, useState } from "react";

interface TemaContextType {
  tema: "dark" | "light";
  alternarTema: () => void;
}

export const TemaContext = createContext<TemaContextType | null>(null);

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<"dark" | "light">("dark");

  const alternarTema = () => {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
\`\`\`

### 2. Hook customizado

\`\`\`tsx
export function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema deve ser usado dentro de TemaProvider");
  }
  return context;
}
\`\`\`

### 3. Usando nos componentes

\`\`\`tsx
// App.tsx — Envolver com o Provider
function App() {
  return (
    <TemaProvider>
      <Layout />
    </TemaProvider>
  );
}

// Qualquer componente, em qualquer nível
function BotaoTema() {
  const { tema, alternarTema } = useTema(); // ✅ Sem prop drilling!

  return (
    <button onClick={alternarTema}>
      Tema atual: {tema}
    </button>
  );
}
\`\`\`

## Exemplo prático: Autenticação

\`\`\`tsx
interface AuthContextType {
  usuario: Usuario | null;
  login: (dados: LoginData) => Promise<void>;
  logout: () => void;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = async (dados: LoginData) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(dados),
    });
    const usuario = await response.json();
    setUsuario(usuario);
  };

  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
\`\`\`

## Quando usar Context vs Zustand/Redux?

| Cenário | Solução Recomendada |
|---|---|
| Tema, idioma, usuário logado | Context API ✅ |
| Estado complexo com muitas ações | Zustand ou Redux |
| Performance crítica (muitas atualizações) | Zustand |
| Aplicação pequena/média | Context API ✅ |

## Conclusão

A Context API é perfeita para estado global simples. Para casos mais complexos, considere Zustand ou Redux Toolkit — mas comece sempre pelo mais simples!
`,
  },
];
