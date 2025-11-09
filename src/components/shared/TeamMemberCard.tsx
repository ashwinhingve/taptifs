"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-100 to-red-100">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
          >
            <div className="text-white">
              <p className="text-sm leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-amber-600 font-medium mb-4">{member.role}</p>

          {/* Social Links */}
          <div className="flex gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-red-100 flex items-center justify-center hover:from-amber-600 hover:to-red-700 text-gray-600 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-red-100 flex items-center justify-center hover:from-amber-600 hover:to-red-700 text-gray-600 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-red-100 flex items-center justify-center hover:from-amber-600 hover:to-red-700 text-gray-600 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
