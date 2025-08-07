'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Reveal from '@/components/Reveal'
import { facultyData } from '@/data/faculty'

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const departments = ['All', ...new Set(facultyData.map(member => member.department))]

  const filteredFaculty = facultyData.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6">
                Faculty & Staff
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Meet our dedicated team of experienced educators committed to 
                providing quality education and guidance to our students.
              </p>
            </div>
          </Reveal>

          {/* Search and Filter */}
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1">
                <Input
                  placeholder="Search by name or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-64">
                <Select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </Select>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <Image 
                    src={member.photo || `/placeholder.png?height=300&width=300&text=${encodeURIComponent(member.name + ' teacher')}`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-brand-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-primary-500 font-medium mb-2">
                      {member.designation}
                    </p>
                    <p className="text-brand-muted-600 text-sm mb-3">
                      {member.subject}
                    </p>
                    <div className="text-xs text-brand-muted-500">
                      <p>{member.qualification}</p>
                      <p>{member.experience} years experience</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-muted-600">
                No faculty members found matching your search criteria.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  )
}
