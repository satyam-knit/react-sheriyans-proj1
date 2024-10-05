import { useState } from "react";

const Create = () => {
    const [Title, setTitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [isButtonMoving, setIsButtonMoving] = useState(false);
    const [buttonPosition, setButtonPosition] = useState(0);

    // Check if all form fields are filled
    const isFormFilled = Title && image && category && price && description;

    // Function to handle mouse hover on the button
    const handleMouseEnter = () => {
        if (!isFormFilled) {
            // Move button randomly to left or right
            const randomShift = Math.random() < 0.5 ? -100 : 100; // shift by 100px
            setButtonPosition(buttonPosition + randomShift);
            setIsButtonMoving(true);  // Set state to move the button
        } else {
            setIsButtonMoving(false);  // Stop button movement if form is filled
        }
    };

    return (
        <form className="p-[5%] w-screen h-screen flex flex-col items-center">
            <h1 className="text-3xl p-3 animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-purple-600 animate-rainbow">
                Add New Product Here
            </h1>

            <input
                type="url"
                placeholder="Image Link"
                className="text-1xl bg-zinc-100 border-s-amber-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setimage(e.target.value)}
                value={image}
            />
            <input
                type="number"
                placeholder="Price"
                className="text-1xl bg-zinc-100 border-s-amber-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setprice(e.target.value)}
                value={price}
            />
            <div className="flex gap-10 w-1/2">
                <input
                    type="text"
                    placeholder="Category"
                    className="text-1xl bg-zinc-100 border-s-amber-100 rounded p-3 w-1/2 mb-3"
                    onChange={(e) => setcategory(e.target.value)}
                    value={category}
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="text-1xl bg-zinc-100 border-s-amber-100 rounded p-3 w-1/2 mb-3"
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                />
            </div>

            <textarea
                rows="10"
                placeholder="Description"
                className="text-1xl bg-zinc-100 border-s-amber-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
            ></textarea>

            <button
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none active:scale-95"
                onMouseEnter={handleMouseEnter}
                style={{
                    transform: `translateX(${isButtonMoving ? buttonPosition : 0}px)`,
                }}
            >
                ADD NOW
            </button>
        </form>
    );
};

export default Create;
