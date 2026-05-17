import { UserProfile } from "./UserProfile";

const chief = new UserProfile("Гупало Іван", "finance", {
  canEditUsers: true,
  canApproveBudget: true,
  canAccessInternalTools: true
});

const deputy = chief.clone();
deputy.username = "Коваль Максим";
deputy.permissions.canEditUsers = false;

console.log("=== Оригінал (Chief) ===");
console.log(chief);

console.log("\n=== Копія (Deputy) ===");
console.log(deputy);

