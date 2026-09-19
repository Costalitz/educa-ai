import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormStep } from '@/components/features/Simulation/FormStep'
import { StepProgress } from '@/components/features/Simulation/Progress'
import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'
import { useSimulationFormData } from '@/hooks/useSimulationFormData'

export const SimulationForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  )

  const navigate = useNavigate()

  const { saveFormData } = useSimulationFormData()

  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }

    setFormData(updatedFormData)

    if (currentStepIndex + 1 > totalSteps - 1) {
      saveFormData(updatedFormData)
      void navigate('/simulation/result')
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />

      <FormStep
        key={currentStep.id}
        {...currentStep}
        hideBackButton={currentStepIndex === 0}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
      />
    </>
  )
}
