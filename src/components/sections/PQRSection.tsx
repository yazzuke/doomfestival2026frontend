import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { WhatsAppButton } from "../ui/WhatsappButton";

interface FAQ {
  question: string;
  answer: string;
}

export const PQRSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: t('pqr.faqs.age.question'),
      answer: t('pqr.faqs.age.answer')
    },
    {
      question: t('pqr.faqs.time.question'),
      answer: t('pqr.faqs.time.answer')
    },
    {
      question: t('pqr.faqs.reentry.question'),
      answer: t('pqr.faqs.reentry.answer')
    },
    {
      question: t('pqr.faqs.payment.question'),
      answer: t('pqr.faqs.payment.answer')
    },
    {
      question: t('pqr.faqs.refund.question'),
      answer: t('pqr.faqs.refund.answer')
    },
    {
      question: t('pqr.faqs.parking.question'),
      answer: t('pqr.faqs.parking.answer')
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('pqr.contact.email.title'),
      value: "info@doomfestival.com",
      link: "mailto:info@doomfestival.com"
    },
    {
      icon: Phone,
      title: t('pqr.contact.phone.title'),
      value: "+57 300 123 4567",
      link: "tel:+573001234567"
    },
    {
      icon: MapPin,
      title: t('pqr.contact.location.title'),
      value: "Bogotá, Colombia",
      link: "#"
    },  
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Fondo con grid futurista */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzIsIDIwNCwgMjIsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-black text-white mb-4 tracking-wider relative inline-block"
            animate={{
              textShadow: [
                '0 0 10px rgba(132, 204, 22, 0.5)',
                '0 0 20px rgba(132, 204, 22, 0.8)',
                '0 0 10px rgba(132, 204, 22, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-orbitron">
              {t('pqr.title')}
            </span>
          </motion.h2>
          <motion.p 
            className="text-[#84cc16] text-base md:text-lg max-w-2xl mx-auto tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('pqr.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="text-[#84cc16]" size={32} />
              <h3 className="text-2xl md:text-3xl font-black text-white font-orbitron tracking-wider">
                {t('pqr.faqsTitle')}
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-2 border-gray-700 hover:border-[#84cc16] transition-all duration-300 bg-black/60 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left group"
                  >
                    <span className="font-rajdhani text-base md:text-lg font-bold text-white group-hover:text-[#84cc16] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#84cc16] flex-shrink-0"
                    >
                      {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: openIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 border-t-2 border-[#84cc16]/30">
                      <p className="text-gray-300 font-rajdhani text-sm md:text-base leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-[#84cc16]" size={32} />
              <h3 className="text-2xl md:text-3xl font-black text-white font-orbitron tracking-wider">
                {t('pqr.contactTitle')}
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10,
                    boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)'
                  }}
                  className="flex items-start gap-4 p-6 border-2 border-gray-700 hover:border-[#84cc16] bg-black/60 backdrop-blur-sm transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#84cc16]/10 border-2 border-[#84cc16] group-hover:bg-[#84cc16] transition-colors duration-300">
                    <info.icon className="text-[#84cc16] group-hover:text-black transition-colors duration-300" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-rajdhani text-[#84cc16] font-bold text-sm mb-1 tracking-wider">
                      {info.title}
                    </h4>
                    <p className="font-rajdhani text-white text-base md:text-lg font-semibold">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Box con WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 border-2 border-[#84cc16] bg-gradient-to-br from-[#84cc16]/10 to-transparent backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#84cc16]/10 to-transparent"
                animate={{
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative z-10">
                <h4 className="font-orbitron text-xl md:text-2xl font-black text-white mb-3 tracking-wider">
                  {t('pqr.needHelp.title')}
                </h4>
                <p className="text-gray-300 font-rajdhani text-sm md:text-base mb-4 leading-relaxed">
                  {t('pqr.needHelp.description')}
                </p>
                <WhatsAppButton 
                  variant="inline"
                  showText={true}
                  text={t('pqr.needHelp.button')}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5C] font-black font-rajdhani text-lg tracking-wider"
                  defaultMessage={`Hola! Tengo una pregunta sobre DOOM Festival 2026`}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};