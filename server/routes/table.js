const Table = require("../models/Table");
const router = require("express").Router();

// ADD
router.post("/add",async(req,res)=>{
    const newTable = new Table({
        nik:req.body.nik,
        nama:req.body.nama,
        foto:req.body.foto
    });
    try {
        const savedTable = await newTable.save();
        res.status(201).json(savedTable);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTable);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Table.findByIdAndDelete(req.params.id);
    res.status(200).json("Table has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Table
router.get("/:id", async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    res.status(200).json(table);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Table
router.get("/", async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL PRODUCTS BY SORTIR
// router.get("/", async (req, res) => {
//     const qNew = req.query.new;
//     const qCategory = req.query.category;
//     try {
//       let products;
  
//       if (qNew) {
//         products = await Product.find().sort({ createdAt: -1 }).limit(1);
//       } else if (qCategory) {
//         products = await Product.find({
//           categories: {
//             $in: [qCategory],
//           },
//         });
//       } else {
//         products = await Product.find();
//       }
  
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;
