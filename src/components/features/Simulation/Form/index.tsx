import { FormStep } from '@/components/features/Simulation/FormStep'
import { StepProgress } from '@/components/features/Simulation/Progress'
import { simulationFormSteps } from '@/data/simulation'

export const SimulationForm = () => {
  const currentStep = simulationFormSteps[0]

  return (
    <>
      <StepProgress currentStep={1} totalSteps={simulationFormSteps.length} />
      <FormStep key={currentStep.id} {...currentStep} />
    </>
  )
}
