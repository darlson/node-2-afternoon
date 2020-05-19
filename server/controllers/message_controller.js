let msg = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        const newMsg = {id, text, time}
        msg.push(newMsg)
        id++
        res.status(200).send(msg)
    },
    read: (req, res) => {
        res.status(200).send(msg)
    },
    update: (req, res) => {
        const {msg_id} = req.params
        const {text, time} = req.body
        const ix = msg.findIndex(e=> e.id === +msg_id)
        if (ix === -1){
            return res.status(404).send('Message not found')
        }
        // const updatedMsg = {id: +msg_id, text, time}
        // msg[ix] = updatedMsg
        
        msg[ix] = {
            id: +msg_id,
            text: text || msg[ix].text,
            time: time || msg[ix].time
        }

        res.status(200).send(msg)
    },
    delete: (req, res) => {
        const {msg_id} = req.params
        const ix = msg.findIndex(e=> e.id === +msg_id)
        if (ix === -1){
            return res.status(404).send('Message not found')
        }
        msg.splice(ix, 1)
        // console.log(msg)
        // msg = msg.filter(e=> e.id != +msg_id)
        // console.log(msg)
        res.status(200).send(msg)
    },
}
