import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { preferences, timestamp } = await request.json();
    
    // Here you could log cookie preferences to your database
    // or analytics service if needed for compliance reporting
    
    console.log('Cookie preferences updated:', {
      preferences,
      timestamp,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Cookie preferences saved successfully' 
    });
    
  } catch (error) {
    console.error('Error saving cookie preferences:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to save cookie preferences' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return cookie policy information
  return NextResponse.json({
    cookieTypes: {
      necessary: {
        name: 'Gerekli Çerezler',
        nameEn: 'Necessary Cookies',
        description: 'Web sitesinin temel işlevselliği için gerekli çerezler',
        descriptionEn: 'Cookies essential for basic website functionality',
        mandatory: true,
        duration: 'Oturum süresi',
        durationEn: 'Session duration'
      },
      analytics: {
        name: 'Analitik Çerezleri',
        nameEn: 'Analytics Cookies',
        description: 'Ziyaretçi davranışlarını ve site performansını analiz etmek için kullanılan çerezler',
        descriptionEn: 'Cookies used to analyze visitor behavior and site performance',
        mandatory: false,
        duration: '2 yıl',
        durationEn: '2 years',
        provider: 'Google Analytics'
      },
      marketing: {
        name: 'Pazarlama Çerezleri',
        nameEn: 'Marketing Cookies',
        description: 'Kişiselleştirilmiş reklamlar göstermek için kullanılan çerezler',
        descriptionEn: 'Cookies used to show personalized advertisements',
        mandatory: false,
        duration: '1 yıl',
        durationEn: '1 year'
      },
      preferences: {
        name: 'Tercih Çerezleri',
        nameEn: 'Preference Cookies',
        description: 'Kullanıcı tercihlerini hatırlamak için kullanılan çerezler',
        descriptionEn: 'Cookies used to remember user preferences',
        mandatory: false,
        duration: '1 yıl',
        durationEn: '1 year'
      }
    }
  });
}