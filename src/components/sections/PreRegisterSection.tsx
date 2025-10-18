import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { doom8 } from '../../assets';
import { useTranslation } from 'react-i18next';

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  cedula: string;
  terms_accepted: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    full_name: string;
    email: string;
    phone: string;
    cedula: string;
    terms_accepted: boolean;
    registration_date: string;
    ip_address: string;
    status: string;
  };
  error?: string;
}

export const PreRegisterSection = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    cedula: '',
    terms_accepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms_accepted) {
      setSubmitStatus({
        type: 'error',
        message: t('preRegister.form.termsError')
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://doomfestivalback.zeabur.app/api/preuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.nombre,
          email: formData.correo,
          phone: formData.telefono,
          cedula: formData.cedula,
          terms_accepted: formData.terms_accepted
        })
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || t('preRegister.messages.success')
        });
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          cedula: '',
          terms_accepted: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t('preRegister.messages.error')
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: t('preRegister.messages.connectionError')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <section id="pre-register" className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={doom8} type="video/mp4" />
      </video>

      <div className="relative z-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Título con efecto glitch - colores del festival */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider relative"
              animate={{
                textShadow: [
                  '0 0 10px rgba(158, 197, 75, 0.5)',
                  '0 0 20px rgba(158, 197, 75, 0.8)',
                  '0 0 10px rgba(158, 197, 75, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-orbitron relative inline-block text-6xl">
                {t('preRegister.title')}
                <motion.span 
                  className="absolute inset-0 text-[#9ec54b] opacity-70 blur-sm"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    x: [-2, 2, -2],
                    y: [-1, 1, -1]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
           
                </motion.span>
              </span>
            </motion.h2>
          </div>

          {/* Mensaje de estado */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 border-2 flex items-center gap-3 backdrop-blur-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-[#9ec54b]/20 border-[#9ec54b] text-[#c8dd7c]' 
                  : 'bg-red-500/20 border-red-500 text-red-400'
              }`}
            >
              {submitStatus.type === 'success' ? (
                <Check size={24} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={24} className="flex-shrink-0" />
              )}
              <p className="text-sm font-bold">{submitStatus.message}</p>
            </motion.div>
          )}

          {/* Formulario con mejor contraste */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-xl bg-[#0a0f0a]/95 p-8 md:p-12 border-2 border-[#9ec54b]/40 relative overflow-hidden shadow-2xl shadow-[#9ec54b]/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Borde animado */}
            <motion.div
              className="absolute inset-0 border-2 border-[#9ec54b]/0 pointer-events-none"
              animate={{
                borderColor: ['rgba(158, 197, 75, 0)', 'rgba(158, 197, 75, 0.6)', 'rgba(158, 197, 75, 0)']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Efecto de brillo en las esquinas */}
            <motion.div 
              className="absolute top-0 left-0 w-32 h-32 bg-[#9ec54b]/30 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 bg-[#c8dd7c]/30 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />

            {/* Campo Nombre */}
            <div className="relative group">
              <label className="font-rajdhani block text-[#9ec54b] text-sm font-bold mb-2 tracking-wider uppercase">
                {t('preRegister.form.fullName')}
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="font-rajdhani w-full bg-[#0a0f0a]/90 border-2 border-[#3a4a3a] focus:border-[#9ec54b] text-white px-4 py-3 transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(158,197,75,0.3)] group-hover:border-[#9ec54b]/50 disabled:opacity-50"
                placeholder={t('preRegister.form.fullNamePlaceholder')}
              />
            </div>

            {/* Campo Correo */}
            <div className="relative group">
              <label className="font-rajdhani block text-[#9ec54b] text-sm font-bold mb-2 tracking-wider uppercase">
                {t('preRegister.form.email')}
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="font-rajdhani w-full bg-[#0a0f0a]/90 border-2 border-[#3a4a3a] focus:border-[#9ec54b] text-white px-4 py-3 transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(158,197,75,0.3)] group-hover:border-[#9ec54b]/50 disabled:opacity-50"
                placeholder={t('preRegister.form.emailPlaceholder')}
              />
              <p className="font-rajdhani text-yellow-400 text-xs mt-1 font-bold flex items-center gap-1">
                <span className="font-rajdhani text-yellow-500">⚠️</span> {t('preRegister.form.emailWarning')}
              </p>
            </div>

            {/* Campo Teléfono */}
            <div className="relative group">
              <label className="font-rajdhani block text-[#9ec54b] text-sm font-bold mb-2 tracking-wider uppercase">
                {t('preRegister.form.phone')}
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="font-rajdhani w-full bg-[#0a0f0a]/90 border-2 border-[#3a4a3a] focus:border-[#9ec54b] text-white px-4 py-3 transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(158,197,75,0.3)] group-hover:border-[#9ec54b]/50 disabled:opacity-50"
                placeholder={t('preRegister.form.phonePlaceholder')}
              />
            </div>

            {/* Campo Cédula */}
            <div className="relative group">
              <label className="font-rajdhani block text-[#9ec54b] text-sm font-bold mb-2 tracking-wider uppercase">
                {t('preRegister.form.cedula')}
              </label>
              <input
                type="text"
                name="cedula"
                value={formData.cedula}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="font-rajdhani w-full bg-[#0a0f0a]/90 border-2 border-[#3a4a3a] focus:border-[#9ec54b] text-white px-4 py-3 transition-all duration-300 focus:outline-none focus:shadow-[0_0_20px_rgba(158,197,75,0.3)] group-hover:border-[#9ec54b]/50 disabled:opacity-50"
                placeholder={t('preRegister.form.cedulaPlaceholder')}
              />
            </div>

            {/* Checkbox de términos */}
            <div className="relative group flex items-start gap-3">
              <input
                type="checkbox"
                name="terms_accepted"
                checked={formData.terms_accepted}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-1 w-5 h-5 bg-[#0a0f0a] border-2 border-[#3a4a3a] checked:bg-[#9ec54b] checked:border-[#9ec54b] focus:outline-none focus:ring-2 focus:ring-[#9ec54b] transition-all duration-300 disabled:opacity-50 accent-[#9ec54b]"
              />
              <label className="font-rajdhani text-gray-300 text-sm">
                {t('preRegister.form.terms')}{' '}
                <a href="#" className="font-rajdhani text-[#9ec54b] hover:text-[#c8dd7c] hover:underline font-bold">
                  {t('preRegister.form.termsLink')}
                </a>
                {' '}{t('preRegister.form.termsText')}
              </label>
            </div>

            {/* Botón Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { 
                scale: 1.02, 
                boxShadow: '0 0 30px rgba(158, 197, 75, 0.6)',
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className="font-rajdhani w-full bg-gradient-to-r from-[#9ec54b] to-[#7fa83d] text-black font-bold py-4 px-8 text-lg tracking-widest transition-all duration-300 relative overflow-hidden group border-2 border-[#9ec54b] disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    {t('preRegister.form.submitting')}
                  </span>
                ) : (
                  t('preRegister.form.submitButton')
                )}
              </span>
              {!isSubmitting && (
                <motion.div 
                  className="absolute inset-0 bg-[#c8dd7c]/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.button>
          </motion.form>

          {/* Texto legal */}
          <p className="font-rajdhani text-white font-bold text-xs text-center mt-6 tracking-wide">
            {t('preRegister.form.legalText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};