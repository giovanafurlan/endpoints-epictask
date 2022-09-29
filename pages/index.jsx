import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const metodosUsuario = [
  {
    nome: '/api/user',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todos os Usuários',
    body: ''
  },
  {
    nome: '/api/user/{id}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes do Usuário',
    body: ''
  },
  {
    nome: '/api/user',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Usuário',
    body: `Body:
    {
      "name": "Exemplo",
      "email": "exemplo@fiap.com.br",
      "password": "123"
    }
    `
  },
  {
    nome: '/api/user/{id}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Usuário',
    body: `Body:
    {
      "name": "Exemplo",
      "email": "exemplo@fiap.com.br",
      "password": "321"
    }
    `
  },
  {
    nome: '/api/user/{id}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Usuário',
    body: ''
  }
]

const metodosTarefas = [
  {
    nome: '/api/task',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todos as Tarefas',
    body: ''
  },
  {
    nome: '/api/task/{id}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Tarefa',
    body: ''
  },
  {
    nome: '/api/task',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Tarefa',
    body: `Body:
    {
      "title": "Exemplo de Tarefa",
      "description": "Exemplo de Descrição de Tarefa",
      "score": 100
    }
    `
  },
  {
    nome: '/api/task/{id}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Tarefa',
    body: `Body:
    {
      "title": "Exemplo de Tarefa Atualizada",
      "description": "Exemplo de Atualização de Tarefa",
      "score": 150
    }
    `
  },
  {
    nome: '/api/task/{id}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Tarefa',
    body: ''
  }
]

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW={'6xl'}>
      <Flex
        justifyContent={'space-between'}
        align='center'>
        <Heading
          py='10'>Endpoints</Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Heading
        as={'h2'}
        fontSize='2xl'
        mb='4'>URL:
        <Text></Text>
      </Heading>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Instituição</Heading>
        {metodosUsuario.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Conta</Heading>
        {metodosTarefas.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
    </Container>
  )
}

const Conteudo = ({ titulo, cor, metodo, nome, descricao, body }) => {
  return (
    <Accordion
      allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Flex
              flex='1'
              textAlign='left'
              gap='2'>
              <Tag
                variant='subtle'
                colorScheme={cor}>
                <TagLabel>{metodo}</TagLabel>
              </Tag>
              <Text>{nome}</Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {descricao}
          <br />
          <Code children={body} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}