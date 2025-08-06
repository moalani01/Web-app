import type { MessageType } from '@/types/iot'
import { CONFIG } from '@/config/constants'

interface SimulationResponse {
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  details?: string
}

export async function simulateZmqCommunication(
  messageType: MessageType,
  formData: Record<string, any>
): Promise<SimulationResponse> {
  // Simulate network delay
  const delay = Math.random() * (CONFIG.SIMULATION.MAX_DELAY - CONFIG.SIMULATION.MIN_DELAY) + CONFIG.SIMULATION.MIN_DELAY
  await new Promise(resolve => setTimeout(resolve, delay))
  
  // Simulate success/failure based on configured rate
  const isSuccess = Math.random() < CONFIG.SIMULATION.SUCCESS_RATE
  
  if (isSuccess) {
    return generateSuccessResponse(messageType, formData)
  } else {
    return generateErrorResponse(messageType, formData)
  }
}

function generateSuccessResponse(
  messageType: MessageType,
  formData: Record<string, any>
): SimulationResponse {
  const responses: Record<string, () => SimulationResponse> = {
    sensor_config: () => {
      const selectedSensor = formData.selectedSensor
      
      if (selectedSensor === 'sensor1' && formData.sensorMatrix) {
        const configuredSensors = formData.sensorMatrix.filter((row: any) => 
          row.sensorId && row.sensorMode && row.status
        ).length
        return {
          type: 'success',
          message: `Sensor Matrix configured successfully`,
          details: `Configured ${configuredSensors} sensors in matrix. Sampling at ${formData.matrixSamplingRate}Hz`
        }
      } else if (selectedSensor === 'sensor2') {
        return {
          type: 'success',
          message: `Sensor ${formData.sensor2Id} configured successfully`,
          details: `Sampling rate set to ${formData.sensor2SamplingRate}Hz, threshold: ${formData.sensor2Threshold}`
        }
      } else if (selectedSensor === 'sensor3') {
        return {
          type: 'success',
          message: `Temperature sensor configured`,
          details: `Range: ${formData.tempMin}° to ${formData.tempMax}° ${formData.temperatureUnit}`
        }
      }
      
      return {
        type: 'success',
        message: `Sensor configuration applied`,
        details: `Settings saved successfully`
      }
    },
    
    network_settings: () => ({
      type: 'success',
      message: `Network configuration updated`,
      details: `Connected to ${formData.ssid} using ${formData.connectionType}`
    }),
    
    device_control: () => ({
      type: 'success',
      message: `Device ${formData.deviceId} control updated`,
      details: `Operating in ${formData.operationMode} mode at ${formData.powerLevel}% power`
    }),
    
    data_logging: () => ({
      type: 'success',
      message: `Data logging configuration saved`,
      details: `Logging every ${formData.logInterval}s to ${formData.storageLocation}`
    }),
    
    alert_config: () => ({
      type: 'success',
      message: `Alert "${formData.alertName}" created`,
      details: `Will trigger when value ${formData.condition} ${formData.triggerValue}`
    })
  }
  
  const responseGenerator = responses[messageType.id]
  if (responseGenerator) {
    return responseGenerator()
  }
  
  return {
    type: 'success',
    message: 'Configuration applied successfully',
    details: 'Device responded with ACK'
  }
}

function generateErrorResponse(
  messageType: MessageType,
  formData: Record<string, any>
): SimulationResponse {
  const errorScenarios = [
    {
      type: 'error' as const,
      message: 'Communication timeout',
      details: 'Device did not respond within expected timeframe'
    },
    {
      type: 'error' as const,
      message: 'Invalid configuration',
      details: 'Device rejected the configuration parameters'
    },
    {
      type: 'warning' as const,
      message: 'Partial configuration applied',
      details: 'Some settings could not be updated due to device limitations'
    },
    {
      type: 'error' as const,
      message: 'Device busy',
      details: 'Device is currently processing another request'
    },
    {
      type: 'warning' as const,
      message: 'Configuration queued',
      details: 'Device will apply settings after current operation completes'
    }
  ]
  
  // Return a random error scenario
  return errorScenarios[Math.floor(Math.random() * errorScenarios.length)]
}