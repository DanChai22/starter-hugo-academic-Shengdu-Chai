---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: sdchai24@m.fudan.edu.cn
  phone: (+86)13968589013
  address:
    street: 220 Handan Rd, Yangpu District
    city: Shanghai
    region: Shanghai
    postcode: '200437'
    country: China
    country_code: CN
  coordinates:
    latitude: '31.2974'
    longitude: '121.5036'
  office_hours:
    - 'Monday 10:00 to 13:00'
    - 'Wednesday 09:00 to 10:00'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: 'https://twitter.com/ShengduChai'

design:
  columns: '2'
---
