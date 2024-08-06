#!/bin/bash

# Function to get the absolute path of a file
get_absolute_path() {
    echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

# Build de la librería de seguridad
echo "---Iniciando build de security-component---"
cd ../security-component-lib/fuentes/ || { echo "No se ha encontrado directorio, revisa que el directorio existe y que el nombre coincido con el descrito en README.md"; exit 1; }

# Run npm ci
echo "Lanzando npm ci..."
npm ci
if [ $? -ne 0 ]; then
    echo "npm ci falló"
    exit 1
fi

# Run ng build
echo "Lanzando ng build..."
ng build
if [ $? -ne 0 ]; then
    echo "ng build falló"
    exit 1
fi

# Change to the dist directory
echo "Navegando a directorio del dist de security-component..."
cd dist/i-rf-security-component-node-lib || { echo "Directorio del build de security no encontrado"; exit 1; }

# Pack security component
echo "Pack security component..."
npm pack 
if [ $? -ne 0 ]; then
    echo "Error lanzando npm pack en security-component"
    exit 1
fi

# Store the absolute path of the tarball (use relative path from the current directory)
SECURITY_TARBALL_RELATIVE_PATH="fomento-i-rf-security-component-node-lib-1.4.0.tgz"
SECURITY_TARBALL_PATH=$(get_absolute_path "$TARBALL_RELATIVE_PATH")

# Echo the absolute path of the tarball
echo "Tarball path: $SECURITY_TARBALL_PATH"

# Build de la librería de lógica
echo "---Iniciando build de logic-component---"
cd ../../../../logic-Component-lib/fuentes || { echo "No se ha encontrado directorio, revisa que el directorio existe y que el nombre coincido con el descrito en README.md"; exit 1; }

# Run npm i
echo "Lanzando npm i..."
npm i
if [ $? -ne 0 ]; then
    echo "npm ci falló"
    exit 1
fi

# Installing previously packed build in logic-component
echo "Instalando security-component en logic-component..."
npm i "$SECURITY_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i falló"
    exit 1
fi

# Run ng build
echo "Lanzando ng build..."
ng build
if [ $? -ne 0 ]; then
    echo "ng build falló"
    exit 1
fi

# Change to the dist directory
echo "Navegando a directorio del dist de logic-component..."
cd dist/i-rf-logic-component-node-lib/ || { echo "Directorio del build de logic no encontrado"; exit 1; }

# Pack logic build
echo "Pack logic component..."
npm pack 
if [ $? -ne 0 ]; then
    echo "Error lanzando npm pack en logic-component"
    exit 1
fi
LOGIC_TARBALL_RELATIVE_PATH="fomento-i-rf-logic-component-node-lib-1.5.0.tgz"
LOGIC_TARBALL_PATH=$(get_absolute_path "$TARBALL_RELATIVE_PATH")

# Build de la librería de componentes
echo "---Iniciando build de web-component---"
cd ../../../../web-component-lib/fuentes || { echo "No se ha encontrado directorio, revisa que el directorio existe y que el nombre coincido con el descrito en README.md"; exit 1; }

# Run npm i
echo "Lanzando npm i..."
npm i
if [ $? -ne 0 ]; then
    echo "npm i falló"
    exit 1
fi

# Installing previously packed build in logic-component
echo "Instalando components en web-component..."
npm i "$SECURITY_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i security falló"
    exit 1
fi
npm i "$LOGIC_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i logic falló"
    exit 1
fi

# Run ng build
echo "Lanzando ng build..."
ng build
if [ $? -ne 0 ]; then
    echo "ng build falló"
    exit 1
fi

# Change to the dist directory
echo "Navegando a directorio del dist de web-component..."
cd dist/i-rf-web-component-node-lib/ || { echo "Directorio del build de logic no encontrado"; exit 1; }

# Pack logic build
echo "Pack web component..."
npm pack 
if [ $? -ne 0 ]; then
    echo "Error lanzando npm pack en web-component"
    exit 1
fi
WEB_TARBALL_RELATIVE_PATH="fomento-i-rf-logic-component-node-lib-1.5.0.tgz"
WEB_TARBALL_PATH=$(get_absolute_path "$TARBALL_RELATIVE_PATH")

# Build de la librería de componentes
echo "---Iniciando build del arquetipo---"
cd ../../../../test-component-ms/fuentes || { echo "No se ha encontrado directorio, revisa que el directorio existe y que el nombre coincido con el descrito en README.md"; exit 1; }

# Run npm i
echo "Lanzando npm i..."
npm i
if [ $? -ne 0 ]; then
    echo "npm i falló"
    exit 1
fi

# Installing previously packed build in logic-component
echo "Instalando components en web-component..."
npm i "$SECURITY_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i security component falló"
    exit 1
fi
npm i "$LOGIC_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i logic component falló"
    exit 1
fi
npm i "$WEB_TARBALL_PATH"
if [ $? -ne 0 ]; then
    echo "npm i web component falló"
    exit 1
fi

npm start