import React from 'react'
import { motion } from 'framer-motion'

interface SensorCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

const SensorCard: React.FC<SensorCardProps> = ({ title, value, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </motion.div>
  )
}

export default SensorCard