import { useState } from "react";

export default function UseTableOrForm() {
    const [visible, setVisible] = useState<'table' | 'form'>('table')
    const showTable = () => setVisible('table')
    const showForm = () => setVisible('form')

    return {
        tableOfVisible: visible === 'table',
        formOfVisible: visible === 'form',
        showTable,
        showForm
    }
}
