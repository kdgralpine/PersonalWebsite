'use client'
import { Printer } from 'lucide-react'
export default function PrintResume() { return <button onClick={() => window.print()} className="button primary print-button"><Printer size={15} /> Print / save PDF</button> }
