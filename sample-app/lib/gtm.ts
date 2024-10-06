export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value: number
}) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'customEvent',
      eventAction: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    })
  }
}