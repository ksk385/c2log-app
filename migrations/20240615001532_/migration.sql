-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ndc" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryId" TEXT NOT NULL,
    "logId" INTEGER NOT NULL,
    CONSTRAINT "Entries_logId_fkey" FOREIGN KEY ("logId") REFERENCES "Log" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Entries" ("date", "entryId", "id", "logId", "ndc", "quantity") SELECT "date", "entryId", "id", "logId", "ndc", "quantity" FROM "Entries";
DROP TABLE "Entries";
ALTER TABLE "new_Entries" RENAME TO "Entries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
