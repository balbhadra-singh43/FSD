    // product -> id, name , price , qty
    // add product , remove product, update quantity,showcart , checkout , emptycart and calculate total price


    import readline from "readline/promises";
    import { stdin, stdout} from "process";
    import { writeFile , readFile, appendFile} from "fs/promises";

    // database using file starts
    const FILE = "./lab 2/product.json";

    const getCart = async () =>{
        const data = await readFile(FILE , "utf-8");
        return JSON.parse(data);

    }

    const saveCart = async (cart) => {
        await writeFile(FILE, JSON.stringify(cart,null,2));
    };

    const addToCart = async (product) => {
        const cart = await getCart();
        const isFoundInCart = cart.find((p) => p.id === product.id);
        if(isFoundInCart) {
            isFoundInCart.qty += 1;
            await saveCart(cart);
        }else cart.push(product);
        await saveCart(cart);
        console.log(`${product.name} added to cart`);
    };

    const displayCart = async () => {
        const cart = await getCart();
        if(cart.length == 0) {
            console.log("Cart is empty");
            return;
        }
        console.table(cart);
        const total = cart.reduce((sum , item) => sum + item.price * item.qty, 0);
        console.log(`Total Price: ${total}`);
    }

    const main = async () => {
        let choice;
        const cin = readline.createInterface({ input: stdin, output: stdout });
        do {
        console.log("Welcome to Amazon Shopping 🛒");
        console.log("1. Show Cart");
        console.log("2. Add Product");
        console.log("3. Remove Product");
        console.log("4. Update Quantity");
        console.log("5. Checkout");
        console.log("6. Empty Cart");
        console.log("7. Calculate Total Price");
        choice = await cin.question("Enter your choice: \n");

        switch(Number(choice)) {
            case 1:
                displayCart();
                break;
            case 2:
                const item = await cin.question("Enter product details (id,name,price,qty): ");
                const [id, name , price , qty] = item.split(",").map((p) => p.trim());
                await addToCart({id: Number(id), name, price: Number(price), qty: Number(qty)});

                break;
            case 3:
                console.log("Remove Product");
                break;
            case 4:
                console.log("Update Quantity");
                break;
            case 5:
                console.log("Checkout");
                break;
            case 6:
                console.log("Empty Cart");
                break;
            case 7:
                console.log("Calculate Total Price");
                break;
            default:
                console.log("Invalid choice");
        }
        } while (choice != 5);
        cin.close();
    };

    main();