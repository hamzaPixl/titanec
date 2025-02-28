import { useIntl } from 'react-intl'
import { useEffect, useState } from 'react'

export const useTranslate = () => {
  const { formatMessage, messages } = useIntl()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (Object.keys(messages).length > 0) {
      setReady(true)
    }
  }, [messages])

  const t = (id) => {
    if (!messages[id]) {
      return id
    }
    return formatMessage({ id })
  }

  return { t, ready }
}
