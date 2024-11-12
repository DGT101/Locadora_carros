-- CreateTable
CREATE TABLE "cores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true,
    "corId" INTEGER NOT NULL,
    CONSTRAINT "carros_corId_fkey" FOREIGN KEY ("corId") REFERENCES "cores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "enderecos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "locacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valorDia" REAL NOT NULL,
    "dataInicio" TEXT NOT NULL,
    "dataFim" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "carroId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    CONSTRAINT "locacoes_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "carros" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "locacoes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cores_nome_key" ON "cores"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_name_key" ON "clientes"("name");
