export const fetch = async(red, res) => {
    try {
        res.json("Hello World")
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}