export type MenuItem = { nome: string; descricao: string; preco: string; foto: string };
export type MenuCategoria = { nome: string; slug: string; itens: MenuItem[] };

export const menu: MenuCategoria[] = [
  {
    "nome": "Espetos",
    "slug": "espetos",
    "itens": [
      {
        "nome": "Kafta com Queijo",
        "descricao": "Delicie-se com nosso espetinho de kafta suculento, enriquecido com queijo derretido, proporcionando uma experiência de sabor única e irresistível.",
        "preco": "R$ 12,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608010001_GSAC_.jpeg"
      },
      {
        "nome": "Medalhão Provolone",
        "descricao": "Experimente o medalhão de provolone, uma combinação perfeita de queijo cremoso e sabor marcante, ideal para os amantes de queijos.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607312350_V307_.jpeg"
      },
      {
        "nome": "Medalhão Queijo Coalho",
        "descricao": "Aprecie o medalhão de queijo coalho, levemente grelhado, trazendo uma textura macia e um sabor levemente salgado.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031904_BNJ8_i.jpg"
      },
      {
        "nome": "Medalhão Romeu & Julieta",
        "descricao": "Saboreie o medalhão Romeu & Julieta, uma deliciosa fusão de queijo e goiabada, criando um contraste doce e salgado irresistível.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031911_FE82_i.jpg"
      },
      {
        "nome": "Linguiça Cuiabana Suína",
        "descricao": "Prove a linguiça cuiabana suína, temperada com especiarias regionais, oferecendo um sabor autêntico e marcante.",
        "preco": "R$ 14,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031925_MMYK_i.jpg"
      },
      {
        "nome": "Linguiça Cuiabana Bovina",
        "descricao": "Desfrute da linguiça cuiabana bovina, com um tempero especial que realça o sabor da carne, perfeita para os apreciadores de um bom churrasco.",
        "preco": "R$ 14,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031930_XEHT_i.jpg"
      },
      {
        "nome": "Medalhão Mandioca com Queijo",
        "descricao": "Experimente o medalhão de mandioca com queijo, uma combinação deliciosa de mandioca macia e queijo derretido.",
        "preco": "R$ 15,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031941_SWT4_i.jpg"
      },
      {
        "nome": "Medalhão Suíno",
        "descricao": "Aprecie o medalhão suíno, suculento e bem temperado, ideal para quem busca um sabor clássico e reconfortante.",
        "preco": "R$ 15,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608031948_353J_i.jpg"
      },
      {
        "nome": "Medalhão Cupim com Queijo",
        "descricao": "Delicie-se com o medalhão de cupim com queijo, uma combinação suculenta e saborosa que derrete na boca.",
        "preco": "R$ 16,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608032032_7UA2_i.jpg"
      },
      {
        "nome": "Medalhão Carne",
        "descricao": "Saboreie o medalhão de carne, grelhado à perfeição, oferecendo um sabor robusto e suculento.",
        "preco": "R$ 16,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608032037_201J_i.jpg"
      },
      {
        "nome": "Medalhão Frango",
        "descricao": "Experimente o medalhão de frango, macio e bem temperado, perfeito para uma refeição leve e saborosa.",
        "preco": "R$ 16,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608150129_SMX3_.jpeg"
      },
      {
        "nome": "Cordeiro",
        "descricao": "Desfrute do espetinho de cordeiro, com carne macia e suculenta, temperada com ervas finas para um sabor sofisticado.",
        "preco": "R$ 20,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608032100_QHK8_i.jpg"
      },
      {
        "nome": "Linguiça Fina",
        "descricao": "Delicie-se com a tradicional linguiça fina, grelhada à perfeição, oferecendo um sabor suculento e irresistível.",
        "preco": "R$ 10,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291308_78L5_i.jpg"
      },
      {
        "nome": "Linguiça Fina Apimentada",
        "descricao": "Experimente a linguiça fina apimentada, uma explosão de sabores picantes que vai aquecer seu paladar.",
        "preco": "R$ 10,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291346_740E_i.jpg"
      },
      {
        "nome": "Toscana Apimentada",
        "descricao": "Aprecie a toscana apimentada, uma combinação perfeita de especiarias que traz um toque especial ao seu churrasco.",
        "preco": "R$ 11,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291308_78L5_i.jpg"
      },
      {
        "nome": "Lombo",
        "descricao": "Saboreie o lombo suculento, grelhado com maestria, proporcionando uma experiência gastronômica única.",
        "preco": "R$ 11,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291346_740E_i.jpg"
      },
      {
        "nome": "Costela Suína",
        "descricao": "Delicie-se com a costela suína, macia e saborosa, perfeita para os amantes de carne suculenta.",
        "preco": "R$ 11,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291302_4F74_i.jpg"
      },
      {
        "nome": "Frango",
        "descricao": "Aprecie o frango grelhado, suculento e bem temperado, uma escolha clássica e deliciosa.",
        "preco": "R$ 11,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608150127_RKW7_.jpeg"
      },
      {
        "nome": "Kafta",
        "descricao": "Experimente a kafta, uma iguaria suculenta e bem temperada, perfeita para os amantes de sabores exóticos.",
        "preco": "R$ 11,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608141849_PN0T_i.jpg"
      },
      {
        "nome": "Queijo Coalho",
        "descricao": "Delicie-se com o queijo coalho, grelhado até ficar dourado, oferecendo uma textura única e sabor irresistível.",
        "preco": "R$ 11,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608141856_F7WT_i.jpg"
      },
      {
        "nome": "Frango com Bacon",
        "descricao": "Aprecie o frango com bacon, uma combinação irresistível de sabores que vai conquistar seu paladar.",
        "preco": "R$ 12,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608150126_WM1Z_.jpeg"
      },
      {
        "nome": "Carne",
        "descricao": "Saboreie a carne grelhada, suculenta e bem temperada, uma escolha clássica para os amantes de churrasco.",
        "preco": "R$ 12,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607312343_EL34_.jpeg"
      },
      {
        "nome": "Misto",
        "descricao": "Desfrute do espeto misto, uma seleção de carnes variadas, perfeita para quem gosta de diversidade de sabores.",
        "preco": "R$ 12,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291310_NM45_i.jpg"
      },
      {
        "nome": "Muçarela Defumada",
        "descricao": "Experimente a muçarela defumada, uma delícia cremosa e aromática, perfeita para os amantes de queijo.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608141834_OWU6_i.jpg"
      },
      {
        "nome": "Carne com Bacon",
        "descricao": "Aprecie a carne com bacon, uma combinação suculenta e saborosa que vai conquistar seu paladar.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291302_4F74_i.jpg"
      },
      {
        "nome": "Coração",
        "descricao": "Saboreie o coração grelhado, uma iguaria suculenta e bem temperada, perfeita para os amantes de sabores intensos.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291308_78L5_i.jpg"
      },
      {
        "nome": "Costela Bovina",
        "descricao": "Delicie-se com a costela bovina, macia e saborosa, perfeita para os amantes de carne suculenta.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291303_4Y1Y_i.jpg"
      },
      {
        "nome": "Tulipa",
        "descricao": "Aprecie a tulipa, uma escolha suculenta e bem temperada, perfeita para os amantes de frango.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291310_NM45_i.jpg"
      },
      {
        "nome": "Panceta",
        "descricao": "Experimente a panceta, uma iguaria suculenta e crocante, perfeita para os amantes de sabores intensos.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291302_4F74_i.jpg"
      },
      {
        "nome": "Toscana",
        "descricao": "Desfrute da toscana, uma linguiça suculenta e bem temperada, perfeita para os amantes de churrasco.",
        "preco": "R$ 13,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607291310_NM45_i.jpg"
      }
    ]
  },
  {
    "nome": "Hambúrguer Artesanal",
    "slug": "hamburguer-artesanal",
    "itens": [
      {
        "nome": "Cheese Burger",
        "descricao": "Um clássico irresistível com pão brioche macio, hambúrguer suculento e queijo derretido, criando uma combinação perfeita de sabores tradicionais.",
        "preco": "R$ 37,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607301924_TENW_i.jpg"
      },
      {
        "nome": "Cheese Salada",
        "descricao": "Delicie-se com o frescor da salada crocante, combinada com pão brioche, hambúrguer suculento e queijo derretido, proporcionando uma experiência refrescante.",
        "preco": "R$ 39,90",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607301924_JUR6_i.jpg"
      },
      {
        "nome": "Cheese Bacon",
        "descricao": "Saboreie a indulgência do bacon crocante, harmonizado com pão brioche, hambúrguer suculento, queijo derretido e salada fresca, criando uma explosão de sabores.",
        "preco": "R$ 45,50",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607301925_FQ0Y_i.jpg"
      },
      {
        "nome": "Cheese Bacon Egg",
        "descricao": "Experimente a combinação perfeita de bacon crocante e ovo, junto com pão brioche, hambúrguer suculento, queijo derretido e salada fresca.",
        "preco": "R$ 48,90",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202607301926_8HT8_i.jpg"
      }
    ]
  },
  {
    "nome": "Lanches",
    "slug": "lanches",
    "itens": [
      {
        "nome": "Lanche de Carne em tiras",
        "descricao": "Lanche de pão francês, carne bovina grelhada em tiras, suculenta e douradinha, com aquele delicioso sabor defumado da brasa, acompanha vinagrete.",
        "preco": "R$ 22,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608111821_444L_i.jpg"
      },
      {
        "nome": "Lanche de Linguiça Toscana",
        "descricao": "Lanche de pão francês, Linguiça Toscana Grelhada, suculenta e douradinha, com aquele delicioso sabor defumado da brasa, acompanha vinagrete.",
        "preco": "R$ 23,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608111822_LKVX_i.jpg"
      }
    ]
  },
  {
    "nome": "Petiscos",
    "slug": "petiscos",
    "itens": [
      {
        "nome": "Surpresa de Salmão (6 un.)",
        "descricao": "Delicie-se com a surpreendente Surpresa de Salmão, composta por seis unidades de salmão fresco, combinado com cream cheese cremoso e uma seleção de especiarias aromáticas. Acompanha um sofisticado molho tártaro, que complementa perfeitamente o sabor do prato, tornando-o uma escolha irresistível para os amantes de frutos do mar.",
        "preco": "R$ 51,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608111746_CPL6_i.jpg"
      }
    ]
  },
  {
    "nome": "Torresmo de rolo",
    "slug": "torresmo-de-rolo",
    "itens": [
      {
        "nome": "2 torresmos de rolo",
        "descricao": "Batata ou mandioca",
        "preco": "R$ 119,90",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608111741_41TS_i.jpg"
      },
      {
        "nome": "Torresmo de rolo",
        "descricao": "Batata ou mandioca",
        "preco": "R$ 68,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/3b53cdef-6028-4e99-b534-dfce2b1e6a5a/202608111741_41TS_i.jpg"
      }
    ]
  },
  {
    "nome": "Bebidas",
    "slug": "bebidas",
    "itens": [
      {
        "nome": "Coca Cola Lata 350ml",
        "descricao": "",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202607031839_s7k5fwv48wo.jpeg"
      },
      {
        "nome": "Coca Cola Zero Lata 350ml",
        "descricao": "",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202410091134_4f07pcy90a.jpeg"
      },
      {
        "nome": "Fanta Guarana Lata 6x350ml",
        "descricao": "Lata 350ml",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210192155_o0ondxs2m4.jpg"
      },
      {
        "nome": "Guaraná Zero Lata 350 Ml",
        "descricao": "",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202512011121_qqodl8o93gk.png"
      },
      {
        "nome": "Sprite 350ml",
        "descricao": "",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202511241854_dxaqxkb734t.png"
      },
      {
        "nome": "Refrigerante Sprite Zero Lata 350ml",
        "descricao": "Lata 350ml",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202604221115_mlebirxyg6j.png"
      },
      {
        "nome": "Fanta Uva Lata 350ml",
        "descricao": "Embalagem 350ml",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210190250_i6muhjahkh.jpg"
      },
      {
        "nome": "Fanta Laranja Lata 350ml",
        "descricao": "Lata 350ml",
        "preco": "R$ 8,00",
        "foto": "https://static.ifood-static.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210202325_dvi8sv4hm6m.jpg"
      }
    ]
  }
];
