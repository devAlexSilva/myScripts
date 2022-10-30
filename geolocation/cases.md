# OPÇÕES

**A : Transportadora e SKU com Modal**

>Método
>- Criar um modal.
>- associar o modal ao SKU
>- associar o modal à transportadora que atende na região Nordeste

*dessa forma, apenas a transportadora que possui o modal associado poderá ser selecionada para a entrega daquele sku*

>**Caso de uso**
>- O cliente adiciona um SKU que possui disponibilidade apenas na região Nordeste
>>O CEP para entrega é da região Nordeste. Portanto, será selecionada a transportadora que possui o modal (uma que atende apenas na região Nordeste). ✅
>
>>O CEP informado não é da região Nordeste. Logo, não será exibida uma transportadora, pois a transportadora com aquele Modal não atende fora do Nordeste. ✅

>**Problemas**
>- O cliente adicona 10 SKUs distintos e apenas 1 possui restrição.
>>se o CEP for do Sul, a restrição será aplicada e não terá transportadora disponível para finalizar o checkout (o objetivo foi atendido). Mas e quanto aos outros 9 SKUs que não devem ser restringidos por região? ❌

---

**B : Associação de SKU à política comercial**

[referência ↗️](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb)

>- criar uma política comercial.
>- Adicionar à essa política uma transportadora que só atenda na região Nordeste
>- Associar a política comercial criada em *produtos e SKUs* ao SKU específico.

*essa abordagem nos permite criar uma tabela de preços específica para SKUs com grande volume, alterando o cálculo de peso para volume, compensando o valor do frete*