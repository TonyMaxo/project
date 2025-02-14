import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Upload, DollarSign, Link as LinkIcon, AlertCircle, Image, Video } from 'lucide-react';

interface FormData {
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  pricing: {
    type: 'free' | 'paid' | 'subscription';
    amount: number;
    interval?: 'monthly' | 'yearly';
  };
  integrationUrl: string;
  demoUrl: string;
  thumbnail: File | null;
  demoVideo: File | null;
  screenshots: File[];
  termsAccepted: boolean;
}

export default function Submit() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    shortDescription: '',
    category: '',
    pricing: {
      type: 'paid',
      amount: 0,
      interval: 'monthly'
    },
    integrationUrl: '',
    demoUrl: '',
    thumbnail: null,
    demoVideo: null,
    screenshots: [],
    termsAccepted: false
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const demoVideoInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "AI Chatbots",
    "Content Creation",
    "Data Analysis",
    "Developer Tools",
    "Image Generation",
    "Marketing",
    "Productivity",
    "Text Analysis",
    "Video Generation",
    "Voice & Speech"
  ];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Agent name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required';
    } else if (formData.shortDescription.length > 150) {
      newErrors.shortDescription = 'Short description must be less than 150 characters';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (formData.pricing.type === 'paid' && formData.pricing.amount <= 0) {
      newErrors.pricing = 'Price must be greater than 0';
    }

    if (!formData.integrationUrl.trim()) {
      newErrors.integrationUrl = 'Integration URL is required';
    } else if (!isValidUrl(formData.integrationUrl)) {
      newErrors.integrationUrl = 'Please enter a valid URL';
    }

    if (formData.demoUrl && !isValidUrl(formData.demoUrl)) {
      newErrors.demoUrl = 'Please enter a valid URL';
    }

    if (!formData.thumbnail) {
      newErrors.thumbnail = 'Thumbnail image is required';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setErrors({ ...errors, thumbnail: 'Thumbnail must be less than 2MB' });
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, thumbnail: 'Please upload an image file' });
        return;
      }
      setFormData({ ...formData, thumbnail: file });
      setThumbnailPreview(URL.createObjectURL(file));
      setErrors({ ...errors, thumbnail: undefined });
    }
  };

  const handleDemoVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        setErrors({ ...errors, demoVideo: 'Video must be less than 50MB' });
        return;
      }
      if (!file.type.startsWith('video/')) {
        setErrors({ ...errors, demoVideo: 'Please upload a video file' });
        return;
      }
      setFormData({ ...formData, demoVideo: file });
      setErrors({ ...errors, demoVideo: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement API call to submit the agent
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

      // Reset form
      setFormData({
        name: '',
        description: '',
        shortDescription: '',
        category: '',
        pricing: {
          type: 'paid',
          amount: 0,
          interval: 'monthly'
        },
        integrationUrl: '',
        demoUrl: '',
        thumbnail: null,
        demoVideo: null,
        screenshots: [],
        termsAccepted: false
      });
      setThumbnailPreview('');

      // Show success message
      alert('Agent submitted successfully!');
    } catch (error) {
      console.error('Error submitting agent:', error);
      alert('Failed to submit agent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Submit Your AI Agent
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              List your AI agent on our platform and reach thousands of potential users
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-8 p-8">
              {/* Media Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Media</h2>

                {/* Thumbnail Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Thumbnail Image *
                  </label>
                  <div className="mt-1 flex flex-col items-center">
                    {thumbnailPreview ? (
                      <div className="relative w-full h-48 mb-4">
                        <img
                          src={thumbnailPreview}
                          alt="Thumbnail preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, thumbnail: null });
                            setThumbnailPreview('');
                          }}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => thumbnailInputRef.current?.click()}
                        className="w-full h-48 border-2 border-gray-300 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500"
                      >
                        <Image className="h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Click to upload thumbnail</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                      </div>
                    )}
                    <input
                      ref={thumbnailInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      className="hidden"
                    />
                  </div>
                  {errors.thumbnail && (
                    <p className="mt-1 text-sm text-red-600">{errors.thumbnail}</p>
                  )}
                </div>

                {/* Demo Video Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Demo Video (Optional)
                  </label>
                  <div className="mt-1">
                    <div
                      onClick={() => demoVideoInputRef.current?.click()}
                      className="w-full border-2 border-gray-300 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500"
                    >
                      <Video className="h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        {formData.demoVideo ? formData.demoVideo.name : 'Click to upload demo video'}
                      </p>
                      <p className="text-xs text-gray-500">MP4, WebM up to 50MB</p>
                    </div>
                    <input
                      ref={demoVideoInputRef}
                      type="file"
                      accept="video/*"
                      onChange={handleDemoVideoChange}
                      className="hidden"
                    />
                  </div>
                  {errors.demoVideo && (
                    <p className="mt-1 text-sm text-red-600">{errors.demoVideo}</p>
                  )}
                </div>
              </div>

              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Agent Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.name
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                    Short Description * (150 characters max)
                  </label>
                  <input
                    type="text"
                    id="shortDescription"
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    maxLength={150}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.shortDescription
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.shortDescription.length}/150 characters
                  </p>
                  {errors.shortDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.shortDescription}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Full Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.description
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`mt-1 block w-full rounded-md shadow-sm ${errors.category
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Pricing</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Pricing Type *
                    </label>
                    <div className="mt-2 space-x-4">
                      {['free', 'paid', 'subscription'].map((type) => (
                        <label key={type} className="inline-flex items-center">
                          <input
                            type="radio"
                            value={type}
                            checked={formData.pricing.type === type}
                            onChange={(e) => setFormData({
                              ...formData,
                              pricing: { ...formData.pricing, type: e.target.value as 'free' | 'paid' | 'subscription' }
                            })}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.pricing.type !== 'free' && (
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price (USD) *
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="price"
                          min="0"
                          step="0.01"
                          value={formData.pricing.amount}
                          onChange={(e) => setFormData({
                            ...formData,
                            pricing: { ...formData.pricing, amount: parseFloat(e.target.value) }
                          })}
                          className={`pl-10 block w-full rounded-md ${errors.pricing
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            }`}
                        />
                      </div>
                      {errors.pricing && (
                        <p className="mt-1 text-sm text-red-600">{errors.pricing}</p>
                      )}
                    </div>
                  )}

                  {formData.pricing.type === 'subscription' && (
                    <div>
                      <label htmlFor="interval" className="block text-sm font-medium text-gray-700">
                        Billing Interval *
                      </label>
                      <select
                        id="interval"
                        value={formData.pricing.interval}
                        onChange={(e) => setFormData({
                          ...formData,
                          pricing: { ...formData.pricing, interval: e.target.value as 'monthly' | 'yearly' }
                        })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Integration */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Integration</h2>

                <div>
                  <label htmlFor="integrationUrl" className="block text-sm font-medium text-gray-700">
                    Integration URL *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="integrationUrl"
                      value={formData.integrationUrl}
                      onChange={(e) => setFormData({ ...formData, integrationUrl: e.target.value })}
                      className={`pl-10 block w-full rounded-md ${errors.integrationUrl
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      placeholder="https://"
                    />
                  </div>
                  {errors.integrationUrl && (
                    <p className="mt-1 text-sm text-red-600">{errors.integrationUrl}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    URL where your agent's UI can be embedded (iframe compatible)
                  </p>
                </div>

                <div>
                  <label htmlFor="demoUrl" className="block text-sm font-medium text-gray-700">
                    Demo URL (Optional)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="demoUrl"
                      value={formData.demoUrl}
                      onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                      className={`pl-10 block w-full rounded-md ${errors.demoUrl
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      placeholder="https://"
                    />
                  </div>
                  {errors.demoUrl && (
                    <p className="mt-1 text-sm text-red-600">{errors.demoUrl}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    URL where users can try a demo of your agent
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Screenshots (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="screenshots"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload files</span>
                          <input
                            id="screenshots"
                            type="file"
                            multiple
                            accept="image/*"
                            className="sr-only"
                            onChange={(e) => {
                              const files = Array.from(e.target.files || []);
                              setFormData({ ...formData, screenshots: files });
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB each
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className={`h-4 w-4 rounded ${errors.termsAccepted
                        ? 'border-red-300 text-red-600 focus:ring-red-500'
                        : 'border-gray-300 text-blue-600 focus:ring-blue-500'
                        }`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I agree to the{' '}
                      <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                        terms and conditions
                      </Link>
                    </label>
                    {errors.termsAccepted && (
                      <p className="mt-1 text-sm text-red-600">{errors.termsAccepted}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Agent'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-medium text-blue-900">Need Help?</h3>
            </div>
            <div className="mt-4 text-sm text-blue-700">
              <p>
                For technical support or questions about the submission process, please check our{' '}
                <Link to="/docs" className="font-medium underline">
                  documentation
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="font-medium underline">
                  contact our support team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
