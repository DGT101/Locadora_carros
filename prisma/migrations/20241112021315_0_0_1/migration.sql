-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_clientes" ("cpf", "id", "nome") SELECT "cpf", "id", "nome" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE UNIQUE INDEX "clientes_name_key" ON "clientes"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
