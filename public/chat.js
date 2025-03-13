// Chat Widget Script
(function() {
    // Variables de texto para traducción
    const TEXTOS = {
        iniciarChat: "Iniciar Chat",
        whatsapp: "WhatsApp",
        correo: "Correo electrónico",
        llamada: "Llamar por teléfono",
        escribirMensaje: "Escribe tu mensaje aqui...",
        atencionCliente: "Atención al Cliente",
        error: "Error:",
        hola: "Hola 👋, ¿Cómo podemos ayudarte?",
        respondemosRapidamente: "respondemos rapidamente",
        emojis: "Emojis",
        noDisponible: "Lo sentimos, en este momento no podemos atender por chat. Por favor, intenta más tarde o utiliza WhatsApp.",
        // Agrega más textos según sea necesario
    };

    // Create and inject styles
    const styles = `
        .n8n-chat-widget {
            --chat--color-primary: var(--n8n-chat-primary-color, #854fff);
            --chat--color-secondary: var(--n8n-chat-secondary-color, #6b3fd4);
            --chat--color-background: var(--n8n-chat-background-color, #ffffff);
            --chat--color-font: var(--n8n-chat-font-color, #333333);
            font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            width: 380px;
            height: 600px;
            background: var(--chat--color-background);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(133, 79, 255, 0.15);
            border: 1px solid rgba(133, 79, 255, 0.2);
            overflow: hidden;
            font-family: inherit;
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            opacity: 0;
            transform: translateY(20px);
            visibility: hidden;
        }

        .n8n-chat-widget .chat-container.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-container.open {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
        }

        .n8n-chat-widget .brand-header {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(133, 79, 255, 0.1);
            position: relative;
        }

        .n8n-chat-widget .close-button {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--chat--color-font);
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s;
            font-size: 20px;
            opacity: 0.6;
        }

        .n8n-chat-widget .close-button:hover {
            opacity: 1;
        }

        .n8n-chat-widget .brand-header img {
            width: 32px;
            height: 32px;
        }

        .n8n-chat-widget .brand-header span {
            font-size: 18px;
            font-weight: 500;
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .new-conversation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            text-align: center;
            width: 100%;
            max-width: 300px;
        }

        .n8n-chat-widget .welcome-text {
            font-size: 24px;
            font-weight: 600;
            color: var(--chat--color-font);
            margin-bottom: 24px;
            line-height: 1.3;
        }

        .n8n-chat-widget .new-chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 16px 24px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s, box-shadow 0.3s;
            font-weight: 500;
            font-family: inherit;
            margin-bottom: 12px;
            box-shadow: 0 4px 12px rgba(133, 79, 255, 0.3);
        }

        .n8n-chat-widget .new-chat-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(133, 79, 255, 0.4);
        }

        .n8n-chat-widget .new-chat-btn.whatsapp {
            background: #128C7E; /* Color verde más oscuro de WhatsApp */
            color: white;
        }

        .n8n-chat-widget .new-chat-btn.email {
            background: #D44638; /* Rojo similar a Gmail */
            color: white;
        }
        
        .n8n-chat-widget .new-chat-btn.phone {
            background: #4CAF50; /* Verde para llamadas */
            color: white;
        }

        .n8n-chat-widget .message-icon {
            width: 20px;
            height: 20px;
        }

        .n8n-chat-widget .response-text {
            font-size: 14px;
            color: var(--chat--color-font);
            opacity: 0.7;
            margin: 0;
        }

        .n8n-chat-widget .chat-interface {
            display: none;
            flex-direction: column;
            height: 100%;
        }

        .n8n-chat-widget .chat-interface.active {
            display: flex;
        }

        .n8n-chat-widget .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--chat--color-background);
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .chat-message {
            padding: 12px 16px;
            margin: 8px 0;
            border-radius: 12px;
            max-width: 80%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5;
        }

        .n8n-chat-widget .chat-message.user {
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            align-self: flex-end;
            box-shadow: 0 4px 12px rgba(133, 79, 255, 0.3);
            border-radius: 16px;
            border: none;
        }

        .n8n-chat-widget .chat-message.bot {
            background: var(--chat--color-background);
            border: 1px solid rgba(133, 79, 255, 0.2);
            color: var(--chat--color-font);
            align-self: flex-start;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
        }

        .n8n-chat-widget .chat-loader {
            display: none;
            align-self: flex-start;
            padding: 12px 16px;
            margin: 8px 0;
            border-radius: 12px;
            background: var(--chat--color-background);
            border: 1px solid rgba(133, 79, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .n8n-chat-widget .chat-loader.active {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .n8n-chat-widget .chat-loader-dots {
            display: flex;
            gap: 4px;
        }

        .n8n-chat-widget .chat-loader-dot {
            width: 8px;
            height: 8px;
            background: var(--chat--color-primary);
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out;
        }

        .n8n-chat-widget .chat-loader-dot:nth-child(1) { animation-delay: -0.32s; }
        .n8n-chat-widget .chat-loader-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        .n8n-chat-widget .chat-input {
            padding: 16px;
            background: var(--chat--color-background);
            border-top: 1px solid rgba(133, 79, 255, 0.1);
            display: flex;
            gap: 8px;
        }

        .n8n-chat-widget .chat-input-buttons {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .n8n-chat-widget .chat-input textarea {
            flex: 1;
            padding: 12px;
            border: 1px solid rgba(133, 79, 255, 0.2);
            border-radius: 12px;
            background: var(--chat--color-background);
            color: var(--chat--color-font);
            resize: none;
            font-family: inherit;
            font-size: 16px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .n8n-chat-widget .chat-input textarea::placeholder {
            color: var(--chat--color-font);
            opacity: 0.6;
        }

        .n8n-chat-widget .emoji-button {
            background: none;
            color: var(--chat--color-primary);
            border: none;
            border-radius: 12px;
            padding: 0;
            cursor: pointer;
            transition: transform 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }

        .n8n-chat-widget .emoji-button:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-input button {
            background: none;
            color: var(--chat--color-primary);
            border: none;
            border-radius: 12px;
            padding: 0;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            font-family: inherit;
            font-weight: 500;
            box-shadow: none;
            display: none;
        }

        .n8n-chat-widget .send-icon {
            width: 24px;
            height: 24px;
            fill: var(--chat--color-primary);
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(133, 79, 255, 0.3);
            z-index: 999;
            transition: transform 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeInScale 0.5s ease-out;
        }

        .n8n-chat-widget .chat-toggle.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-toggle:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .n8n-chat-widget .chat-footer {
            padding: 8px;
            text-align: center;
            background: var(--chat--color-background);
            border-top: 1px solid rgba(133, 79, 255, 0.1);
        }

        .n8n-chat-widget .chat-footer a {
            color: var(--chat--color-primary);
            text-decoration: none;
            font-size: 12px;
            opacity: 0.8;
            transition: opacity 0.2s;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-footer a:hover {
            opacity: 1;
        }

        @keyframes fadeInScale {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @media (max-width: 768px) {
            .n8n-chat-widget .chat-container {
                width: 100%;
                height: 100%;
                bottom: 0;
                right: 0;
                left: 0;
                top: 0;
                border-radius: 0;
            }

            .n8n-chat-widget .chat-toggle {
                bottom: 10px;
                right: 10px;
                width: 50px;
                height: 50px;
            }
            
            .n8n-chat-widget .emoji-button {
                display: none !important; /* Ocultar botón de emojis en dispositivos móviles */
            }
        }

        .n8n-chat-widget .emoji-panel {
            position: absolute;
            bottom: 80px;
            left: 16px;
            right: 16px;
            background: var(--chat--color-background);
            border: 1px solid rgba(133, 79, 255, 0.2);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 0;
            display: none;
            flex-direction: column;
            width: auto;
            max-height: 300px;
            z-index: 1001;
        }

        .n8n-chat-widget .emoji-panel.active {
            display: flex;
        }

        .n8n-chat-widget .emoji-content {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 4px;
            padding: 12px;
            overflow-y: auto;
            max-height: 220px;
            order: 1;
        }

        .n8n-chat-widget .emoji-categories {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            padding: 8px;
            background: rgba(133, 79, 255, 0.05);
            border-top: 1px solid rgba(133, 79, 255, 0.1);
            border-radius: 0 0 12px 12px;
            position: sticky;
            bottom: 0;
            z-index: 2;
            order: 2;
        }

        .n8n-chat-widget .emoji-category {
            cursor: pointer;
            padding: 6px;
            border-radius: 6px;
            transition: all 0.2s;
            font-size: 16px;
        }

        .n8n-chat-widget .emoji-category:hover {
            background-color: rgba(133, 79, 255, 0.1);
        }

        .n8n-chat-widget .emoji-category.active {
            background-color: rgba(133, 79, 255, 0.2);
            transform: scale(1.1);
        }

        .n8n-chat-widget .emoji-item {
            cursor: pointer;
            font-size: 20px;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: background-color 0.2s;
            padding: 4px;
        }

        .n8n-chat-widget .emoji-item:hover {
            background-color: rgba(133, 79, 255, 0.1);
        }

        .n8n-chat-widget .emoji-content::-webkit-scrollbar {
            width: 6px;
        }

        .n8n-chat-widget .emoji-content::-webkit-scrollbar-track {
            background: transparent;
        }

        .n8n-chat-widget .emoji-content::-webkit-scrollbar-thumb {
            background: rgba(133, 79, 255, 0.2);
            border-radius: 3px;
        }
    `;

    // Load Geist font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css';
    document.head.appendChild(fontLink);

    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Default configuration
    const defaultConfig = {
        branding: {
            logo: '',
            name: '',
            welcomeText: '',
            responseTimeText: '',
            poweredBy: {
                text: '',
                link: '#'
            }
        },
        style: {
            primaryColor: '',
            secondaryColor: '',
            position: 'right',
            backgroundColor: '#ffffff',
            fontColor: '#333333'
        },
        contact: {
            chat: {
                enabled: true,
                webhook: {
                    url: '',
                    route: ''
                }
            },
            whatsapp: {
                enabled: false,
                number: ''
            },
            email: {
                enabled: false,
                address: ''
            },
            phone: {
                enabled: false,
                number: ''
            }
        }
    };

    // Merge user config with defaults
    const config = window.ChatWidgetConfig ? 
        {
            branding: { ...defaultConfig.branding, ...window.ChatWidgetConfig.branding },
            style: { ...defaultConfig.style, ...window.ChatWidgetConfig.style },
            contact: { 
                chat: { 
                    enabled: window.ChatWidgetConfig.contact?.chat?.enabled ?? defaultConfig.contact.chat.enabled,
                    webhook: { 
                        ...defaultConfig.contact.chat.webhook, 
                        ...window.ChatWidgetConfig.contact?.chat?.webhook 
                    }
                },
                whatsapp: { ...defaultConfig.contact.whatsapp, ...window.ChatWidgetConfig.contact?.whatsapp },
                email: { ...defaultConfig.contact.email, ...window.ChatWidgetConfig.contact?.email },
                phone: { ...defaultConfig.contact.phone, ...window.ChatWidgetConfig.contact?.phone }
            }
        } : defaultConfig;

    // Prevent multiple initializations
    if (window.N8NChatWidgetInitialized) return;
    window.N8NChatWidgetInitialized = true;

    let currentSessionId = '';

    // Funciones principales
    function generateUUID() {
        return crypto.randomUUID();
    }

    function startNewConversation() {
        currentSessionId = generateUUID();
        const data = [{
            action: "loadPreviousSession",
            sessionId: currentSessionId,
            route: config.contact.chat.webhook.route,
            metadata: {
                userId: ""
            }
        }];

        // Aplicar clase de animación de salida a los elementos a ocultar
        const brandHeader = chatContainer.querySelector('.brand-header');
        const newConversation = chatContainer.querySelector('.new-conversation');
        
        brandHeader.classList.add('fade-out');
        newConversation.classList.add('fade-out');
        
        // Mostrar la interfaz del chat con animación de entrada
        setTimeout(() => {
            brandHeader.style.display = 'none';
            newConversation.style.display = 'none';
            
            chatInterface.classList.add('fade-in');
            chatInterface.classList.add('active');
            
            // Continuar con el resto del código de inicio de conversación
            fetch(config.contact.chat.webhook.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(responseData => {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.className = 'chat-message bot';
                botMessageDiv.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 8px; fill: var(--chat--color-primary);">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                        </svg>
                        <strong style="margin-right: 8px; font-size: 16px; color: var(--chat--color-primary);">${TEXTOS.atencionCliente}</strong>
                    </div>
                    <span>${Array.isArray(responseData) ? responseData[0].output : responseData.output}</span>
                    <div style="font-size: 12px; color: #999; text-align: right; margin-top: 4px;">
                        <span>${new Date().toLocaleDateString([], { year: '2-digit', month: '2-digit', day: '2-digit' })} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                `;
                messagesContainer.appendChild(botMessageDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            })
            .catch(error => {
                console.error('Error:', error);
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'chat-message bot';
                errorMessageDiv.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 8px; fill: var(--chat--color-primary);">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                        </svg>
                        <strong style="margin-right: 8px; font-size: 16px; color: var(--chat--color-primary);">${TEXTOS.atencionCliente}</strong>
                    </div>
                    <span>${TEXTOS.noDisponible}</span>
                    <div style="font-size: 12px; color: #999; text-align: right; margin-top: 4px;">
                        <span>${new Date().toLocaleDateString([], { year: '2-digit', month: '2-digit', day: '2-digit' })} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                `;
                messagesContainer.appendChild(errorMessageDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
        }, 300); // Tiempo corto para que se vea la animación
    }

    // Generar HTML para los botones de contacto basado en la configuración
    function generateContactButtonsHTML() {
        let buttonsHTML = '';
        
        // Botón de chat (si está habilitado)
        if (config.contact.chat.enabled) {
            buttonsHTML += `
            <button class="new-chat-btn chat-button">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
                </svg>
                ${TEXTOS.iniciarChat}
            </button>`;
        }
        
        // Botón de WhatsApp (si está habilitado y hay número)
        if (config.contact.whatsapp.enabled && config.contact.whatsapp.number) {
            buttonsHTML += `
            <button class="new-chat-btn whatsapp" onclick="window.open('https://wa.me/${config.contact.whatsapp.number}', '_blank')">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.523 5.847L0 24l6.352-1.66C8.085 23.447 10.077 24 12.2 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.676-.52-5.2-1.42l-.37-.22-3.76.98.98-3.76-.22-.37C2.52 15.676 2 13.89 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.2-7.8c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.98 4.73 4.07.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.18-.52-.32z"/>
                </svg>
                ${TEXTOS.whatsapp}
            </button>`;
        }
        
        // Botón de email (si está habilitado y hay dirección)
        if (config.contact.email.enabled && config.contact.email.address) {
            buttonsHTML += `
            <button class="new-chat-btn email" onclick="window.open('mailto:${config.contact.email.address}', '_blank')">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                ${TEXTOS.correo}
            </button>`;
        }
        
        // Botón de teléfono (si está habilitado y hay número)
        if (config.contact.phone.enabled && config.contact.phone.number) {
            buttonsHTML += `
            <button class="new-chat-btn phone" onclick="window.open('tel:${config.contact.phone.number}', '_blank')">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                ${TEXTOS.llamada}
            </button>`;
        }
        
        return buttonsHTML;
    }

    // Create widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'n8n-chat-widget';
    
    // Set CSS variables for colors
    widgetContainer.style.setProperty('--n8n-chat-primary-color', config.style.primaryColor);
    widgetContainer.style.setProperty('--n8n-chat-secondary-color', config.style.secondaryColor);
    widgetContainer.style.setProperty('--n8n-chat-background-color', config.style.backgroundColor);
    widgetContainer.style.setProperty('--n8n-chat-font-color', config.style.fontColor);

    const chatContainer = document.createElement('div');
    chatContainer.className = `chat-container${config.style.position === 'left' ? ' position-left' : ''}`;
    
    const newConversationHTML = `
        <div class="brand-header">
            <img src="${config.branding.logo}" alt="${config.branding.name}">
            <span>${config.branding.name}</span>
            <button class="close-button">&times;</button>
        </div>
        <div class="new-conversation">
            <h2 class="welcome-text">${TEXTOS.hola}</h2>
            ${generateContactButtonsHTML()}
            <p class="response-text">${TEXTOS.respondemosRapidamente}</p>
        </div>
    `;

    const chatInterfaceHTML = `
        <div class="chat-interface">
            <div class="brand-header">
                <img src="${config.branding.logo}" alt="${config.branding.name}">
                <span>${config.branding.name}</span>
                <button class="close-button">&times;</button>
            </div>
            <div class="chat-messages">
                <div class="chat-loader">
                    <div class="chat-loader-dots">
                        <div class="chat-loader-dot"></div>
                        <div class="chat-loader-dot"></div>
                        <div class="chat-loader-dot"></div>
                    </div>
                </div>
            </div>
            <div class="emoji-panel">
                <div class="emoji-categories">
                    <div class="emoji-category active" data-category="frequent">😀</div>
                    <div class="emoji-category" data-category="smileys">😊</div>
                    <div class="emoji-category" data-category="people">👍</div>
                    <div class="emoji-category" data-category="animals">🐱</div>
                    <div class="emoji-category" data-category="food">🍔</div>
                    <div class="emoji-category" data-category="travel">✈️</div>
                    <div class="emoji-category" data-category="activities">⚽</div>
                    <div class="emoji-category" data-category="objects">💡</div>
                    <div class="emoji-category" data-category="symbols">❤️</div>
                    <div class="emoji-category" data-category="flags">🏁</div>
                </div>
                <div class="emoji-content"></div>
            </div>
            <div class="chat-input">
                <div class="chat-input-buttons">
                    <button type="button" class="emoji-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="send-icon">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7zm9-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-8 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>
                        </svg>
                    </button>
                </div>
                <textarea placeholder="${TEXTOS.escribirMensaje}" rows="1"></textarea>
                <div class="chat-input-buttons">
                    <button type="submit" class="send-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="send-icon">
                            <path fill="currentColor" d="M2.01 21l20.99-9L2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="chat-footer">
                <a href="${config.branding.poweredBy.link}" target="_blank">${config.branding.poweredBy.text}</a>
            </div>
        </div>
    `;
    
    chatContainer.innerHTML = newConversationHTML + chatInterfaceHTML;
    
    const toggleButton = document.createElement('button');
    toggleButton.className = `chat-toggle${config.style.position === 'left' ? ' position-left' : ''}`;
    toggleButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>`;
    
    widgetContainer.appendChild(chatContainer);
    widgetContainer.appendChild(toggleButton);
    document.body.appendChild(widgetContainer);

    // Ahora que el DOM está listo, podemos acceder a los elementos
    const chatInterface = chatContainer.querySelector('.chat-interface');
    const messagesContainer = chatContainer.querySelector('.chat-messages');
    const textarea = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('button[type="submit"]');
    const emojiButton = chatContainer.querySelector('.emoji-button');
    const emojiPanel = chatContainer.querySelector('.emoji-panel');
    const emojiCategories = chatContainer.querySelectorAll('.emoji-category');
    const emojiContent = chatContainer.querySelector('.emoji-content');
    const closeButtons = chatContainer.querySelectorAll('.close-button');

    // Configurar el evento para los botones de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            chatContainer.classList.remove('open');
            setTimeout(() => {
                chatContainer.style.visibility = 'hidden';
            }, 500); // Espera a que la transición termine
        });
    });

    // Configurar el botón de chat - AQUÍ ESTÁ EL CAMBIO PRINCIPAL
    if (config.contact.chat.enabled) {
        const chatButton = chatContainer.querySelector('.chat-button');
        if (chatButton) {
            chatButton.addEventListener('click', startNewConversation);
        }
    }

    // Configurar el botón de alternar chat
    toggleButton.addEventListener('click', () => {
        if (chatContainer.classList.contains('open')) {
            chatContainer.classList.remove('open');
            setTimeout(() => {
                chatContainer.style.visibility = 'hidden';
            }, 500); // Espera a que la transición termine
        } else {
            chatContainer.style.visibility = 'visible';
            chatContainer.classList.add('open');
        }
    });

    // Configurar el botón de enviar
    sendButton.addEventListener('click', () => {
        const message = textarea.value.trim();
        if (message) {
            sendMessage(message);
            textarea.value = '';
        }
    });
    
    // Configurar el manejo de presionar Enter en el textarea
    textarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const message = textarea.value.trim();
            if (message) {
                sendMessage(message);
                textarea.value = '';
            }
        }
    });

    // Configurar la entrada de texto
    textarea.addEventListener('input', () => {
        if (textarea.value.trim()) {
            sendButton.style.display = 'block';
            emojiButton.style.display = 'flex';
        } else {
            sendButton.style.display = 'none';
            emojiButton.style.display = 'none';
        }
    });

    // Definir los emojis por categoría
    const emojisByCategory = {
        frequent: ['😀', '😊', '👍', '❤️', '👋', '🙏', '😂', '🎉', '👏', '🤔', '😍'],
        smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳'],
        people: ['👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '👇', '☝️', '👋', '🤚', '🖐️', '✋', '🖖', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️'],
        animals: ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗'],
        food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🌽', '🥕', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙', '🧆', '🌮', '🌯', '🥗', '🥘', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '☕', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊'],
        travel: ['✈️', '🚀', '🚁', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🏎️', '🏍️', '🛵', '🦽', '🦼', '🛺', '🚲', '🛴', '🛹', '🚏', '🛣️', '🛤️', '🛢️', '⛽', '🚨', '🚥', '🚦', '🛑', '🚧'],
        activities: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🥅', '⛳', '🪁', '🎣', '🤿', '🎽', '🎿', '🛷', '🥌', '🎯', '🪂', '🎮', '🕹️', '🎲', '🎭', '🎨', '🧩'],
        objects: ['💡', '🔦', '🕯️', '🧯', '🛒', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️', '💊', '💉', '🩸', '🩹', '🩺', '🔪', '🗡️', '⚔️', '🛡️', '🚪', '🪑', '🛏️', '🛋️', '🪒', '🧴', '🧷', '🧹', '🧺', '🧻', '🧼', '🧽', '🧯', '🛒'],
        symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️'],
        flags: ['🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️']
    };

    // Función para cargar emojis de una categoría
    function loadEmojisForCategory(category) {
        emojiContent.innerHTML = '';
        const emojis = emojisByCategory[category];
        
        emojis.forEach(emoji => {
            const emojiElement = document.createElement('div');
            emojiElement.className = 'emoji-item';
            emojiElement.textContent = emoji;
            emojiElement.addEventListener('click', () => {
                insertEmoji(emoji);
            });
            emojiContent.appendChild(emojiElement);
        });
    }

    // Función para insertar emoji en el textarea
    function insertEmoji(emoji) {
        const cursorPos = textarea.selectionStart;
        const textBefore = textarea.value.substring(0, cursorPos);
        const textAfter = textarea.value.substring(cursorPos);
        
        textarea.value = textBefore + emoji + textAfter;
        
        // Mover el cursor después del emoji insertado
        textarea.selectionStart = cursorPos + emoji.length;
        textarea.selectionEnd = cursorPos + emoji.length;
        textarea.focus();
        
        // Mostrar el botón de enviar
        sendButton.style.display = 'block';
        
        // Cerrar el panel de emojis después de seleccionar uno
        emojiPanel.classList.remove('active');
    }

    // Cargar emojis frecuentes por defecto
    loadEmojisForCategory('frequent');

    // Manejar cambios de categoría
    emojiCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Quitar clase activa de todas las categorías
            emojiCategories.forEach(cat => cat.classList.remove('active'));
            // Añadir clase activa a la categoría seleccionada
            category.classList.add('active');
            // Cargar emojis de la categoría seleccionada
            loadEmojisForCategory(category.dataset.category);
        });
    });

    // Función para manejar el clic en el botón de emojis
    emojiButton.addEventListener('click', () => {
        // Alternar la visibilidad del panel de emojis
        emojiPanel.classList.toggle('active');
        
        // Si el panel está visible, cargar los emojis frecuentes
        if (emojiPanel.classList.contains('active')) {
            loadEmojisForCategory('frequent');
        }
    });

    // Cerrar el panel de emojis al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!emojiPanel.contains(event.target) && !emojiButton.contains(event.target)) {
            emojiPanel.classList.remove('active');
        }
    });

    async function sendMessage(message) {
        const messageData = {
            action: "sendMessage",
            sessionId: currentSessionId,
            route: config.contact.chat.webhook.route,
            chatInput: message,
            metadata: {
                userId: ""
            }
        };

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.innerHTML = `
            <span>${message}</span>
            <div style="font-size: 12px; color: #999; text-align: right; margin-top: 4px;">
                <span>${new Date().toLocaleDateString([], { year: '2-digit', month: '2-digit', day: '2-digit' })} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        `;
        messagesContainer.appendChild(userMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Crear y mostrar loader justo después del mensaje del usuario
        const loader = document.createElement('div');
        loader.className = 'chat-loader active';
        loader.innerHTML = `
            <div class="chat-loader-dots">
                <div class="chat-loader-dot"></div>
                <div class="chat-loader-dot"></div>
                <div class="chat-loader-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(loader);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            const response = await fetch(config.contact.chat.webhook.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageData)
            });
            
            const data = await response.json();
            
            // Eliminar loader
            loader.remove();
            
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            botMessageDiv.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 8px; fill: var(--chat--color-primary);">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                    <strong style="margin-right: 8px; font-size: 16px; color: var(--chat--color-primary);">${TEXTOS.atencionCliente}</strong>
                </div>
                <span>${Array.isArray(data) ? data[0].output : data.output}</span>
                <div style="font-size: 12px; color: #999; text-align: right; margin-top: 4px;">
                    <span>${new Date().toLocaleDateString([], { year: '2-digit', month: '2-digit', day: '2-digit' })} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            `;
            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            // Eliminar loader en caso de error
            loader.remove();
            console.error('Error:', error);
            
            // Añadir mensaje de error al usuario
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'chat-message bot';
            errorMessageDiv.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 16px; height: 16px; margin-right: 8px; fill: var(--chat--color-primary);">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.886-.313-4.156-.878l-3.156.586.586-3.156A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                    <strong style="margin-right: 8px; font-size: 16px; color: var(--chat--color-primary);">${TEXTOS.atencionCliente}</strong>
                </div>
                <span>${TEXTOS.noDisponible}</span>
                <div style="font-size: 12px; color: #999; text-align: right; margin-top: 4px;">
                    <span>${new Date().toLocaleDateString([], { year: '2-digit', month: '2-digit', day: '2-digit' })} · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            `;
            messagesContainer.appendChild(errorMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

})();   
