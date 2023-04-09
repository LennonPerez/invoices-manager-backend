import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', (_, res) => {
    res.send('Fetching all invoices')
})

router.post('/', (_, res) => {
    res.send('Creating a new invoice')
})

const specificInvoice = router.route('/:id');

specificInvoice.get((req, res) => {
    res.send(`Fetching invoice ${req.params.id}`)
})

specificInvoice.put((req, res) => {
    res.send(`Updating invoice ${req.params.id}`)
})

specificInvoice.delete((req, res) => {
    res.send(`Deleting invoice ${req.params.id}`)
})

export default router;