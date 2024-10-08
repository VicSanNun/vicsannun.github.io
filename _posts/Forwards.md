Um contrato a termo é um acordo entre duas partes que define, com antecedência, a quantidade, o preço, a data de entrega e a forma de pagamento de um ativo-objeto negociado.

```ad-attention

É uma típica operação OTC
```

```ad-hint

No forward não há fluxo de caixa na abertura do contrato, ou seja, não existe um pagamento inicial
```

## Conceitos e Notações
- **Ativo Subjacente**: é o ativo que será comprado/vendido numa data futura.
- **Maturidade**: é o prazo entre a abertura do contrado ($t=0$) e o vencimento ($t=T$).
- **Preço a Termo**: É o valor de $F$ determinado no momento da negociação ($t=0$). Estabelece o preço do ativo subjacente que será utilizado no vencimento do contrato ($t=T$).
- **Comprador**: a parte que terá a obrigação de realizar a compra no vencimento do contrato. Posição comprada, *long*.
- **Vendedor**: a parte que terá a obrigação de vender no vencimento. Posição vendida, *short*.
- **Notional**: determina quantas unidades do ativo subjacente serão transacionadas

## Payoff

É o resultado financeiro do derivativo no vencimento.

A posição **long** espera que o preço de mercado do ativo esteja maior que o preço a termo, então podemos modelar o resultado do ponto de vista do comprador como:

$$
W_{l} = S_{T} - F
$$
Já a posição **short** espera que o o preço de mercado esteja menor que o preço a termo, então podemos modelar o resultado do ponto de vista do vendedor como:

$$
W_{s} = F - S_{{t}}
$$
```ad-Exemplo

Um pecuarista possui 100 cabeças de gado magro no pasto, estima-se que deverá levar seis meses para que possa engordar e vender os bois pesando, em média, 25 arrobas cada um deles. Hoje, o valor do arroba do boi à vista está em R$ 145.

Preocupado com o preço da carne no mercado interno, o criador poderia fazer a venda a termo de 2500 arrobas de boi a um preço de R$ 149 por arroba, para o prazo de 6 meses.

Ao final de 6 meses o preço do arroba do boi gordo no mercado é R$ 144 então, o pecuarista teve um resultado:

$$
W_{s} = 149 - 144 = R\$ \ 5,00 
$$
$$
\text{lucro} = 5 \times 2500 = R\$ \ 12.500,00
$$
Já a outra ponta

$$ 
W_{l} = 144 - 149 = -R\$ \ 5,00
$$
$$
\text{prejuizo} = -5 \times 2500 = -R\$ \ 12.500,00
$$
```

