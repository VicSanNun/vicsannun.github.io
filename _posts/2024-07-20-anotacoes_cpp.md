---
layout: post
title: Anotações C++
date: 2024-07-20 00:32:13
description: this is what included tabs in a post could look like
tags: C++
categories: sample-posts
tabs: true
toc:
  sidebar: left
---

```yml
toc:
  sidebar: left
```

# Aula Output Streams

Comando '#include <iostream>' o símbolo _sharpe_('#') indica uma operação de **Pré-compilador**. iostream = Input Output Stream

std::cout, std::cin, std::endl etc - por ora, pensemos isso como std.cout, std.cin, std.endl (cout, cin e endl pertencem a família std)

Para `std::cout`, `'\n'` ou `std::endl` não farão nenhuma diferença perceptível na saída. No entanto, se estiver salvando um arquivo muito grande com `std::ofstream`, aí sim haverá diferença. Enquanto o `'\n'` vai apenas inserir uma quebra de linha, o `std::endl` não só insere a quebra de linha como também faz um flush do buffer, ou seja, escreve todo o conteúdo que está em memória diretamente no arquivo (e limpa o  buffer).

# Aula IF ELSE

# LOOPS

_For_ - Se eu sei de onde vou partir, até onde vou chegar e em que passou eu vou o FOR é o mais adequado. ++i é mais rápido que i++ 

_While_ - Quando eu não sei quando é o final, utilizamos while

_do while_ - Situações que quero garantir que minha aplicação vai rodar um conjunto de instruções pelo menos 1 vez

No C e no C++ quando utilizamos " " por mais que tenhamos um caractere, o compilador adiciona outro, um terminador nulo de string. Porém quando usamos ' ' ele n faz isso, então economizamos bytes ao utilizar aspas simples

# TIPOS PRIMITIVOS

## Int

Até o C++ 98 (é valido até hoje)

|--------------------|--------------|---------------------------|
| Type               | Size (Bytes) | Range                     |
|--------------------|--------------|---------------------------|
| Short              | 2            | -32768 to 32767           |
| Unsigned Short     | 2            | 0 to 65535                |
| int                | 4            | -2147483648 to 2147483647 |
| Unsigned int       | 4            | 0 to 4294967295           |
| long long          | 8            | (-2^63) to (2^63)-1       |
| unsigned long long | 8            | 2^64                      |
|--------------------|--------------|---------------------------|

A partir do C++11

|--------------------|--------------|-----------------|
| Type     | Size (Bytes) | Range                     |
|----------|--------------|---------------------------|
| int8_t (char)  | 1            | -128 to 127               |
| uint8_t (char)  | 1            | 0 to 255                  |
| int16_t  | 2            | -32768 to 32767           |
| uint16_t | 2            | 0 to 65535                |
| int32_t  | 4            | -2147483648 to 2147483647 |
| uint32_t | 4            | 2^32                      |
| int64_t  | 8            | -(2^63) to (2^63)-1       |
| uint64_t | 8            | 2^64                      |
|--------------------|--------------|-----------------|

Essa modificação existe pq inteiros, em diferentes plataformas, podem ter diferentes quantidades de bytes. Quando utilizamos intn\_t garantimos, independente de plataforma, o tamabno do tipo.

Tipos _signed_ precisam de 1 bit para armazenar o sinal. 

## Char

|---------------|--------------|------------------|
| Type          | Size (Bytes) | Note             |
|---------------|--------------|------------------|
| char          | 1            | ASCII            |
| unsigned char | 1            | ASCII            |
| char8_t       | 1            | UTF-8            |
| char16_t      | 2            | UTF-16           |
| char32_t      | 4            | UTF-32           |
| wchar_t       | 2-4          | UTF-16 or UTF-32 |
|---------------|--------------|------------------|

## Float

|---------------|--------------|
| Type          | Size (Bytes) |
|---------------|--------------|
| float         | 4            |
| double        | 8            |
| long double   | 16           |
|---------------|--------------|

# SWITCH-CASE
Mais performático que o IF. Ele só verifica um inteiro (converte char p inteiro, por exemplo). Ele só verifica igualdade.

# Variável, Const e Enum

_Variável_: Pode ser inicializada, e **modificada**. 
_const_: É somente leitura. Não é modificável
    - Pq utilizar **const** ao invés de DEFINE? Pq ao utilizar **define** o pré-compilador cria um objeto temporário em todos os lugares em que utilizamos a "varivel" definida. Já utilizando *const* o compilador só precisa apontar pro endereço de memória da var.

# Funções

## Função Inline

função inline: quando a função é muito pequena (1-4 linhas) e crítica, colocamos como inline. Quando utilizamos o inline o compilador literalmente substitui o código da função onde ela foi chamada. Por outro lado, em funções normais, o compilador faz a chamada normal de funções (colocando na stack etc)
    
    An inline function may increase efficiency if it is small.
    
    Por outro lado, em funções grandes pode n ser tão interessante utilizar o inline.
    
    The compiler may not perform inlining in such circumstances as:
    
    1. If a function contains a loop. (for, while and do-while) 
    2. If a function contains static variables. 
    3. If a function is recursive. 
    4. If a function return type is other than void, and the return statement doesn’t exist in a function body. 
    5. If a function contains a switch or goto statement. 
    
    Interessante verificar o [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#Rf-inline) na seção F.5: If a function is very small and time-critical, declare it inline

## Passagem por Cópia e por Valor

    void test(uint16_t a) {
    a = 10;
    cout << a << endl;
}

int main() {
    uint16_t x = 100;
    
    cout << "Before x: " << x << endl; //imprime x=100
    
    test(x); //passa x=100 para a funcao teste, que modifica a CÓPIA da variável para 10 e imprime
    
    cout << "After x: " << x << endl; //imprime x=100 novamente, pq a funcao teste só modifica a cópia
    
    return 0;
}

## Ponteiros

É uma variável que armazena o endereço de variáveis. Tem tamanho fixo (não importa o tipo que vc atribuir a ele). O seu size é o tamanho de um word do seu sistema. No meu caso, computador de 64bits, o size fixo do ponteiro será 8bytes.

O tipo do ponteiro é o tipo da variável que ele armazena o endereco.

O ponteiro consegue **acessar** e **modificar** o valor da variável a qual ele aponta. Para acessar o valor da variável o ponteiro precisa fazer 2 acessos à memória: primeiro acessa o valor dele mesmo (do ponteiro) e depois acessa o valor armazenado no endereço. Exemplo:
    
    a = 10 -> endereco1
    uint* pa = &a -> endereço2 (*pa armazena o endereco1)
    cout << *pa; -> vai pro endereco2 e pega o seu valor(primeiro acesso a memoria), que é o endereco1, daí vai pro endereco1(segundo acesso a memória) e pega o seu valor que é 10.

## Passagem por Endereço

bool readInt(uint16_t *number) { //recebe o valor da variável apontada
    std::cin >> *number; //modifica o valor da variável apontada (n modifica a cópia, modifica a variável em si)
    if (std::cin.fail()) {
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<uint16_t>::max(), '\n');
        return false;
    }
    return true;
}

readInt(&v) //passa o endereco de v

A passagem de parâmetros por endereço permite que uma função modifique as variáveis originais fornecidas como argumentos. Isso significa que a função pode alterar os valores das variáveis na memória diretamente, em vez de trabalhar com cópias locais. Como resultado, a função pode efetivamente "retornar" múltiplos valores modificando essas variáveis.

Porém, ao utilizar parametro por endereço vc precisa realizar duplo acesso a memoria

## Referência

Armazena o endereço de uma variável sem precisar criar outra variável necessariamente. É uma espécie de apelido da variável (apelido para região de memória). 

Precisa ser inicializada. Não podemos mudar o valor dela ao longo do programa, se ela é inicializada &ra = a, não podemos fazer &ra = b.

Para acessar o valor da variável, precisa fazer somente um acesso à memória.

# Vetores
Em C++ podemos usar o container vector.

    std::vector<uint16_t> vec;
    
    for (uint16_t i = 1; i <= 3; ++i) {
        vec.push_back(i);
    }
    
O push_back é utilizado para inserir no vetor. Ele tem tempo O(1) no melhor caso e O(n) no pior caso. Ao inserir um elemento ele automaticamente reserva espaço pra dois, ele dobra. Inseri um elemento, ele reserva espaço pra dois. Inseri dois elementos, ele reserva espaço pra 4 etc. Faz isso justamente pra garantir que vai ter espaço suficiente pra possíveis inserções. 

Uma boa prática é usar o reserve():

    uint16_t maxNum = 3;
    
    std::vector<uint16_t> vec;
    vec.reserve(maxNum);
    
Criando uma funcao para somar valores em um array:

uint64_t sum(std::vector<uint16_t> vec) {
    uint64_t total = 0 ;
    
    for (std::size_t i {0}; i < vec.size(); ++i) {
        total += vec[i];
    }
    
    return total;
}
    
O problema dessa função é que, como o argumento é passado por valor (cópia'), ele cria uma cópia do vetor na memória. Uma alternativa pode ser passar o argumento por endereço

uint64_t sum(std::vector<uint16_t> *vec) {
    uint64_t total = 0 ;
    
    for (std::size_t i {0}; i < vec->size(); ++i) { //vec->size() = (*vec).size() ou seja, vá para o endereço de vec e pegue o size do valor armazenado lá
        total += vec->operator[](i);
    }
    
    return total;
}

um problema aqui é que vamos ter que realizar duplos acesso a memória pq ele precisa acessar o endereço do próprio ponteiro e depois o o endereço que o ponteiro aponta.

    for (std::size_t i {0}; i < vec->size(); ++i) //10000*2 = 20000 acessos à memória no vec->size()
    
        total += vec->operator[](i); //10000*2 = 20000 acessos à memória no vec->operator[](i)
        
uma forma de diminuir esse custo seria deixar salvo em uma variáve o size afinal não precisamos acessar size a cada iteração.

    size_vec = vec->size()

Isso diminuiria a quantidade de acessos no laço for para ~10002. Mas não escaparíamos no total += vec->operator[](i)

Uma forma de resolver (a melhor forma   ) é passar o argumento por referência, você cria uma "apelido" pro vec

uint64_t sum(std::vector<uint16_t> &vec) { 
    uint64_t total = 0 ;
    
    for (std::size_t i {0}; i < vec.size(); ++i) { //10001
        total += vec[i]; //10000
    }
    
    return total;
}

# Orientação a Objetos

## Princípios

### Encapsulamento

Recursos para proteger os dados com o código, de maneira inviolável

### Herança

Recursos para reaproveitamento de código

### Polimorfismo

Recursos para reaproveitamento de código, porém em um nível mais genérico



## Emulando POO em C com Structs
Conseguimos "criar" um novo tipo de dado com Structs. Usamos Structs para agrupas campos que tenham uma relação entre si.

struct Data {
    int dia;
    int mes;
    int ano;
};

como _int_ tem 4 bytes, o struct Data tem 12 bytes

struct Date {
    int day;
    int month;
    int year;
    bool valid;
};

struct Date initDate() {
    struct Date dt;
    dt.valid = false;
    return dt;
};

struct Date changeDate(struct Date dt, int day, int month, int year) {
    dt.day = day;
    dt.year = year;
    dt.month = month;
    dt.valid = (dt.day >= 1 && dt.day <= 31) && (dt.month >= 1 && dt.month <= 12) && (dt.year >= 1900 && dt.year <= 2100);
    
    return  dt;

};

void printDate(struct Date dt) {
    dt.valid ? printf("Data Pgt: %02d/%02d/%d\n", dt.day, dt.month, dt.year) : printf("Invalid Date! \n");
};

Aqui estamos passando o objeto date, diversas vezes, por cópia. Utilizando passagem por endereço

void initDate(struct Date *dt) {
    dt->valid = false;
};

void changeDate(struct Date *dt, int day, int month, int year) {
    dt->day = day;
    dt->year = year;
    dt->month = month;
    dt->valid = (dt->day >= 1 && dt->day <= 31) && (dt->month >= 1 && dt->month <= 12) && (dt->year >= 1900 && dt->year <= 2100);
    

};

void printDate(struct Date *dt) {
    dt->valid ? printf("Data Pgt: %02d/%02d/%d\n", dt->day, dt->month, dt->year) : printf("Invalid Date! \n");
};

Dessa forma não copiamos o objeto Date novamente. Por outro lado, acessamos a memória mais de uma vez. Como o código foi escrito em C, não podemos utilizar passagem por referência. Utilizar passagem por endereço pode trazer algumas inseguranças no código. Por exemplo:

void printDate(struct Date *dt) {
    dt->valid = true;
    dt->valid ? printf("Data Pgt: %02d/%02d/%d\n", dt->day, dt->month, dt->year) : printf("Invalid Date! \n");
};

Ora, uma função que deveria somente printar o resultado está modificando o objeto. Uma forma de impedir isso é

void printDate(const struct Date *dt)

Ao utilizar o const eu indico pro compilador que essa função utiliza o objeto dt no "modo somente leitura". Eu não vou modificar esse cara.

Uma forma de melhorar a aplicação é 

struct Date {
    short day;
    short month;
    short year;
    bool valid;
};

## Limitações de Emular POO com Structs em C
 1. Não há como forçar a inicialização (o usuário pode esquecer de inicializar o objeto);
    Para corrigir isso em C++ podemos utilizar o construtor. Para isso, basta ter uma função com o mesmo nome do struct ou classe
    
            Date() : _day(0), _month(0), _year(0), _valid(false) {};
            
 2. Todas as Propriedades da Struct são Públicas; (Em C++ Podemos utilizar modificadores de acesso)
 3. As funções são como outras quaisquer funções globais, explicitamente elas não fazem parte da classe. (Em C++ posso colocar as funções dentro da struct)
 4. Temos que repetir a palavra struct (Em C++ podemos apagar o struct. Exceto na definição do objeto.)
 5. Em C não podemos utilizar referências
 
 ### Struct C++
 
 int main() {
    
    Date pgt;
    
    pgt.init(pgt);
    pgt.change(pgt, 1, 2, 2024);
    pgt.print(pgt);
    
    printf("Size of pgt: %lu bytes\n", sizeof(pgt));
    
    return 0;
}

 Estamos passando o pgt em todas as funções do próprio pgt. Podemos utilizar o this aqui. Ao inicializar o método ele implicitamente recebe uma variável (ponteiro) this que aponta pro objeto gerado. Ele é um membro inerente a todos os objetos que instanciamos em programas escritos em C++.
 
        Date() : _day(0), _month(0), _year(0), _valid(false) {};

        void change(int16_t day, int16_t month, int16_t year) {
            this->day = day;
            this->year = year;
            this->month = month;
            this->valid = (this->day >= 1 && this->day <= 31) && (this->month >= 1 && this->month <= 12) && (this->year >= 1900 && this->year <= 2100);
            

        };

        void print() const /*o const na frente é similar ao const Date *this*, ou seja, não iremos alterar o ponteiro this/{
            this->valid ? printf("Data Pgt: %02d/%02d/%d\n", this->day, this->month, this->year) : printf("Invalid Date! \n");
        };

A partir do C++ 11 a inicialização pode ser direto na classe, sem preciar do construtor (se for um construtor padrão, utilizado somente para inicializar)

struct Date {
    int day;
    int month;
    int year;
    bool valid = false;
};

## Construtor que recebe vários parâmetros

        Date (int16_t day, int16_t month, int16_t year) {
            change(day, month, year);
        }

Ao criar um construtor que recebe argumento, por padrão, o C++ elimina o construtor padrão (construtor de inicialização). Para resolver isso fazemos

        Date() = default;
        
            Date (int16_t day, int16_t month, int16_t year) {
            change(day, month, year);
        }
        
## Classe

No struct se vc n especificar os modificadores de acesso, por default, tudo é publico. Já na classe, tudo é privado. Para mudar de struct pra classe basta mudar a palavra reservada.
