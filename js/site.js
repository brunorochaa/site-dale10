// Comportamentos do site: menu do celular, botão "voltar ao topo" e formulário de contato.

const TEXTOS = {
    pt: {
        abrir: 'Abrir menu',
        fechar: 'Fechar menu',
        campo: { nome: 'nome', email: 'e-mail', mensagem: 'mensagem' },
        erro: (campo) => `Preencha o campo ${campo} corretamente.`,
        sucesso: 'Obrigado! Este é um site de estudo, então a mensagem não foi enviada de verdade.',
    },
    en: {
        abrir: 'Open menu',
        fechar: 'Close menu',
        campo: { nome: 'name', email: 'e-mail', mensagem: 'message' },
        erro: (campo) => `Please fill in the ${campo} field correctly.`,
        sucesso: 'Thank you! This is a study project, so the message was not actually sent.',
    },
    es: {
        abrir: 'Abrir menú',
        fechar: 'Cerrar menú',
        campo: { nome: 'nombre', email: 'correo electrónico', mensagem: 'mensaje' },
        erro: (campo) => `Complete correctamente el campo ${campo}.`,
        sucesso: '¡Gracias! Este es un proyecto de estudio, así que el mensaje no se envió de verdad.',
    },
};

const textos = TEXTOS[document.documentElement.lang.slice(0, 2)] ?? TEXTOS.pt;

function configurarMenu() {
    const botao = document.querySelector('.botao-menu');
    const menu = document.getElementById('menu-principal');
    if (!botao || !menu) {
        return;
    }

    function alternar(abrir) {
        menu.classList.toggle('aberto', abrir);
        botao.setAttribute('aria-expanded', String(abrir));
        botao.setAttribute('aria-label', abrir ? textos.fechar : textos.abrir);
    }

    botao.addEventListener('click', () => alternar(!menu.classList.contains('aberto')));
    // Fecha ao escolher um item, ao apertar Esc ou ao voltar para a tela grande.
    menu.addEventListener('click', (evento) => {
        if (evento.target.closest('a')) {
            alternar(false);
        }
    });
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
            alternar(false);
            botao.focus();
        }
    });
    window.matchMedia('(min-width: 960px)').addEventListener('change', () => alternar(false));
}

function configurarVoltarTopo() {
    const botao = document.querySelector('.voltar-topo');
    if (!botao) {
        return;
    }
    const atualizar = () => botao.classList.toggle('visivel', window.scrollY > 600);
    window.addEventListener('scroll', atualizar, { passive: true });
    atualizar();
}

// O site é estático: o formulário valida os campos e mostra um aviso, mas não envia nada.
function configurarFormulario() {
    const formulario = document.getElementById('form-contato');
    if (!formulario) {
        return;
    }
    const aviso = document.getElementById('contato-aviso');

    function mostrar(mensagem, tipo) {
        aviso.textContent = mensagem;
        aviso.className = `aviso ${tipo}`;
    }

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const campos = [...formulario.elements].filter((campo) => campo.name);
        campos.forEach((campo) => {
            campo.value = campo.value.trim();
            campo.classList.toggle('invalido', !campo.checkValidity());
        });
        const invalido = campos.find((campo) => !campo.checkValidity());
        if (invalido) {
            mostrar(textos.erro(textos.campo[invalido.name]), 'erro');
            invalido.focus();
            return;
        }
        formulario.reset();
        mostrar(textos.sucesso, 'sucesso');
    });

    formulario.addEventListener('reset', () => {
        aviso.textContent = '';
        formulario.querySelectorAll('.invalido').forEach((campo) => campo.classList.remove('invalido'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarMenu();
    configurarVoltarTopo();
    configurarFormulario();
});
