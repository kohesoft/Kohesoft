import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, subject, message } = await request.json();
    
    // Basit validasyon
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Ad, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    // E-posta validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Şirkete gönderilecek e-posta
    const companyMailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@kohesoft.com',
      subject: `Yeni İletişim Formu Mesajı: ${subject || 'Konu Belirtilmemiş'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">Kohezyon Yazılım</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Yeni İletişim Formu Mesajı</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0;">İletişim Bilgileri</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Ad Soyad:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-posta:</td>
                <td style="padding: 8px 0; color: #1f2937;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Şirket:</td>
                <td style="padding: 8px 0; color: #1f2937;">${company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Konu:</td>
                <td style="padding: 8px 0; color: #1f2937;">${subject || 'Belirtilmemiş'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0;">Mesaj İçeriği</h3>
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Bu e-posta www.kohesoft.com iletişim formu aracılığıyla gönderilmiştir.</p>
            <p>Tarih: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `,
    };

    // Kullanıcıya gönderilecek otomatik yanıt
    const userMailOptions = {
      from: `"Kohezyon Yazılım" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Mesajınız Alındı - Kohezyon Yazılım',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0;">Kohezyon Yazılım</h1>
            <p style="color: #666; margin: 5px 0 0 0;">www.kohesoft.com</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e293b;">Sayın ${name},</h2>
            <p style="color: #374151; line-height: 1.6;">
              Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınız başarıyla alındı ve 
              en kısa sürede size dönüş yapacağız.
            </p>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 30px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0;">Gönderdiğiniz Mesaj</h3>
            <div style="background: white; padding: 15px; border-radius: 6px;">
              <p style="margin: 0; color: #1f2937; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0;">İletişim Bilgilerimiz</h3>
            <p style="color: #374151; margin: 5px 0;"><strong>E-posta:</strong> info@kohesoft.com</p>
            <p style="color: #374151; margin: 5px 0;"><strong>Telefon:</strong> +90 530 186 15 46</p>
            <p style="color: #374151; margin: 5px 0;"><strong>Website:</strong> www.kohesoft.com</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Bu otomatik bir mesajdır. Lütfen bu e-postaya yanıt vermeyiniz.</p>
            <p>© ${new Date().getFullYear()} Kohezyon Yazılım. Tüm hakları saklıdır.</p>
          </div>
        </div>
      `,
    };

    // E-postaları gönder
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    
    return NextResponse.json(
      { 
        error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.',
        success: false 
      },
      { status: 500 }
    );
  }
}