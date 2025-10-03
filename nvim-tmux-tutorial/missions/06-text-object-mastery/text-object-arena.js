// ╔═══════════════════════════════════════════════════════════════════╗
// ║  DR. VIMSWORTH'S TEXT OBJECT ARENA                                ║
// ║  Training Simulator v3.2.1                                        ║
// ║  [CLASSIFIED - AUTHORIZED PERSONNEL ONLY]                         ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// OBJECTIVE: Refactor this intentionally terrible code using ONLY
//            enhanced text objects from mini.ai
//
// RULES:
//   ✅ Use text objects: af, if, aa, ia, in, il, a?, i?
//   ✅ Use operators: d, y, c, v
//   ✅ Use motions to navigate
//   ❌ NO visual mode for selection (text objects only!)
//   ❌ NO manual character editing
//   ❌ NO mouse
//
// SCORING: Count every keystroke (including Enter, Esc, etc.)
//          Par: 50 keystrokes total
//          Dr. Vimsworth's record: 48 keystrokes
//
// NOTE: Track your score in .arena-scorecard.md after each level

// ═══════════════════════════════════════════════════════════════════
// LEVEL 1: FUNCTION CALL CHAOS
// ═══════════════════════════════════════════════════════════════════
// OBJECTIVE: Extract nested function calls into variables
// PAR: 15 keystrokes
//
// CHALLENGE: Turn this nested mess into clean, readable code
//            Each function call should be a separate variable
//
// TECHNIQUES TO USE:
//   - daf (delete around function) to extract calls
//   - yif (yank inside function) to copy arguments
//   - P/p to paste
//
// BEFORE:

function calculateInvoice(orderId) {
  return applyDiscount(calculateTax(getSubtotal(fetchOrderItems(validateOrder(orderId)))));
}

// EXPECTED AFTER:
//
// function calculateInvoice(orderId) {
//   const validOrder = validateOrder(orderId);
//   const items = fetchOrderItems(validOrder);
//   const subtotal = getSubtotal(items);
//   const withTax = calculateTax(subtotal);
//   return applyDiscount(withTax);
// }

// ═══════════════════════════════════════════════════════════════════
// LEVEL 2: ARGUMENT MADNESS
// ═══════════════════════════════════════════════════════════════════
// OBJECTIVE: Fix function calls with arguments in wrong order
// PAR: 20 keystrokes
//
// CHALLENGE: Arguments are scrambled. Reorder them correctly.
//            Comments show the correct order.
//
// TECHNIQUES TO USE:
//   - via (visual inside argument) to select argument
//   - daa (delete around argument) to remove arg + comma
//   - cia (change inside argument) to modify argument
//
// CURRENT (WRONG):

// Should be: createUser(username, email, age)
const user1 = createUser(email, username, age);

// Should be: sendEmail(to, subject, body, attachments)
const email1 = sendEmail(subject, body, to, attachments);

// Should be: calculatePrice(basePrice, taxRate, discount)
const price1 = calculatePrice(discount, basePrice, taxRate);

// Should be: renderComponent(props, state, context)
const comp1 = renderComponent(state, context, props);

// Should be: queryDatabase(table, conditions, limit, offset)
const results = queryDatabase(conditions, table, offset, limit);

// Should be: formatDate(date, locale, timezone, format)
const formatted = formatDate(timezone, format, date, locale);

// Should be: authenticateUser(credentials, sessionId, ipAddress)
const auth = authenticateUser(ipAddress, credentials, sessionId);

// Should be: processPayment(amount, currency, method, reference)
const payment = processPayment(method, amount, reference, currency);

// ═══════════════════════════════════════════════════════════════════
// LEVEL 3: QUOTE LABYRINTH
// ═══════════════════════════════════════════════════════════════════
// OBJECTIVE: Simplify nested string concatenations
// PAR: 10 keystrokes
//
// CHALLENGE: Remove unnecessary string concatenations
//            Combine into single strings
//
// TECHNIQUES TO USE:
//   - in" (inside next quote) to jump to next string
//   - il" (inside last quote) to jump to previous string
//   - di" (delete inside quote) to clear string content
//   - ci" (change inside quote) to replace string
//
// CURRENT (MESSY):

const message1 = "Hello" + " " + "World" + "!";
const path1 = "/users" + "/" + "profile" + "/" + "settings";
const url1 = "https://" + "api." + "example." + "com";
const query1 = "SELECT" + " * " + "FROM" + " users";
const greeting1 = "Good" + " " + "morning" + "," + " " + "Detective";
const filename1 = "report" + "_" + "2024" + "_" + "final" + ".pdf";

// EXPECTED AFTER:
//
// const message1 = "Hello World!";
// const path1 = "/users/profile/settings";
// const url1 = "https://api.example.com";
// const query1 = "SELECT * FROM users";
// const greeting1 = "Good morning, Detective";
// const filename1 = "report_2024_final.pdf";

// ═══════════════════════════════════════════════════════════════════
// LEVEL 4: BRACKET HELL
// ═══════════════════════════════════════════════════════════════════
// OBJECTIVE: Flatten unnecessarily nested objects
// PAR: 8 keystrokes
//
// CHALLENGE: Remove excessive nesting, flatten the structure
//
// TECHNIQUES TO USE:
//   - in{ / il{ (inside next/last brace) to navigate
//   - da{ (delete around braces) to remove entire blocks
//   - g[ / g] (jump to left/right edge) to position cursor
//
// CURRENT (OVER-NESTED):

const config = {
  server: {
    host: {
      primary: {
        address: "localhost"
      }
    },
    port: {
      http: {
        value: 8080
      }
    }
  }
};

// EXPECTED AFTER:
//
// const config = {
//   host: "localhost",
//   port: 8080
// };

// ═══════════════════════════════════════════════════════════════════
// LEVEL 5: THE VIMSWORTH PATTERN (BOSS LEVEL)
// ═══════════════════════════════════════════════════════════════════
// OBJECTIVE: Complete refactoring combining ALL techniques
// PAR: 7 keystrokes (seems impossible, but she did it)
//
// CHALLENGE: This is Dr. Vimsworth's signature pattern.
//            She could refactor this in 7 keystrokes.
//            Can you figure out how?
//
// HINT: Think about what mini.ai can do with custom patterns.
//       Think about the dot command (.)
//       Think about what repeats.
//
// TECHNIQUES TO USE:
//   - ALL previous techniques
//   - a? (user-prompted text object)
//   - . (dot command to repeat)
//   - Macros (optional, for advanced players)
//
// CURRENT (THE ULTIMATE TEST):

function processData(input) {
  const result = transform(validate(sanitize(parse(normalize(input)))));
  return result;
}

function processUser(user) {
  const result = transform(validate(sanitize(parse(normalize(user)))));
  return result;
}

function processOrder(order) {
  const result = transform(validate(sanitize(parse(normalize(order)))));
  return result;
}

// EXPECTED AFTER:
//
// function processData(input) {
//   return pipeline(input);
// }
//
// function processUser(user) {
//   return pipeline(user);
// }
//
// function processOrder(order) {
//   return pipeline(order);
// }
//
// function pipeline(data) {
//   return transform(validate(sanitize(parse(normalize(data)))));
// }

// ═══════════════════════════════════════════════════════════════════
// 🏆 COMPLETION AREA
// ═══════════════════════════════════════════════════════════════════
//
// When you've completed all 5 levels:
// 1. Calculate your total keystrokes
// 2. Update .arena-scorecard.md
// 3. Check your medal tier:
//    - GOLD: < 60 keystrokes
//    - SILVER: < 80 keystrokes
//    - BRONZE: < 100 keystrokes
//
// If you achieved GOLD or better, run:
//   :! echo "Dr. Vimsworth's Secret Message" > .vimsworth-secret.txt
//   :! echo "Congratulations, Detective. You've mastered what took me years." >> .vimsworth-secret.txt
//   :! echo "Text objects aren't just commands—they're a way of thinking." >> .vimsworth-secret.txt
//   :! echo "You see code as I do now: not characters, but meaning." >> .vimsworth-secret.txt
//   :! echo "You're ready for what comes next." >> .vimsworth-secret.txt
//   :! echo "" >> .vimsworth-secret.txt
//   :! echo "[TOKEN: SIGMA-7]" >> .vimsworth-secret.txt
//   :! echo "Achievement Unlocked: 'The Code Surgeon'" >> .vimsworth-secret.txt
//
// Then read your reward:
//   :vsplit .vimsworth-secret.txt
//
// ═══════════════════════════════════════════════════════════════════
// END OF ARENA
// ═══════════════════════════════════════════════════════════════════
//
// "Most developers see characters. I see meaning.
//  Master text objects, and code becomes clay in your hands."
//
//  - Dr. Elena Vimsworth
//    Last training session: 3 days before disappearance
