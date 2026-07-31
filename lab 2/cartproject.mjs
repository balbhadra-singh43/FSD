// 
import readline from "readline/promises";
import { stdin, stdout } from "process";
import { writeFile, readFile } from "fs/promises";

const FILE = "Product.json";

// Read cart from file
const getCart = async () => {
    try {
        const data = await readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Save cart to file
const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

// Add product
const addToCart = async (product) => {
    const cart = await getCart();

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
        existing.qty += product.qty;
    } else {
        cart.push(product);
    }

    await saveCart(cart);
    console.log("✅ Product added successfully.");
};

// Display cart
const displayCart = async () => {
    const cart = await getCart();

    if (cart.length === 0) {
        console.log("\n🛒 Cart is empty.\n");
        return;
    }

    console.table(cart);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    console.log(`Total Payable Amount = ₹${total}\n`);
};

// Remove product
const removeProduct = async (id) => {
    const cart = await getCart();

    const newCart = cart.filter((item) => item.id !== id);

    if (newCart.length === cart.length) {
        console.log("❌ Product not found.");
        return;
    }

    await saveCart(newCart);
    console.log("✅ Product removed successfully.");
};

// Update quantity
const updateQuantity = async (id, qty) => {
    const cart = await getCart();

    const product = cart.find((item) => item.id === id);

    if (!product) {
        console.log("❌ Product not found.");
        return;
    }

    product.qty = qty;

    await saveCart(cart);
    console.log("✅ Quantity updated.");
};

// Checkout
const checkout = async () => {
    const cart = await getCart();

    if (cart.length === 0) {
        console.log("🛒 Cart is empty.");
        return;
    }

    console.table(cart);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    console.log(`\nTotal Amount = ₹${total}`);
    console.log("🎉 Thank you for shopping!\n");

    await saveCart([]);
};

// Main function
const main = async () => {
    const cin = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    let choice;

    do {
        console.log("\n========== AMAZON SHOPPING ==========");
        console.log("1. Show Cart");
        console.log("2. Add Product");
        console.log("3. Remove Product");
        console.log("4. Update Quantity");
        console.log("5. Checkout & Exit");

        choice = Number(await cin.question("Enter your choice: "));

        switch (choice) {
            case 1:
                await displayCart();
                break;

            case 2: {
                const input = await cin.question(
                    "Enter id,name,price,qty: "
                );

                const [id, name, price, qty] = input
                    .split(",")
                    .map((x) => x.trim());

                await addToCart({
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                });

                break;
            }

            case 3: {
                const id = Number(
                    await cin.question("Enter Product ID to remove: ")
                );

                await removeProduct(id);
                break;
            }

            case 4: {
                const id = Number(
                    await cin.question("Enter Product ID: ")
                );

                const qty = Number(
                    await cin.question("Enter New Quantity: ")
                );

                await updateQuantity(id, qty);
                break;
            }

            case 5:
                await checkout();
                break;

            default:
                console.log("❌ Invalid Choice.");
        }
    } while (choice !== 5);

    cin.close();
};

main();