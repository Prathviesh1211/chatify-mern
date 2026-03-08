import express from "express"

const router=express.Router();

router.get("/signup", (req, res) => {
    res.send("SHAM NO VARUNAH");
});

router.post("/login", (req, res) => {
    res.send("Login route");
});

router.post("/logout", (req, res) => {
    res.send("Logout route");
});

export default router;