// src/services/api.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/`);
    return await res.json();
  } catch (err) { return []; }
};

export const fetchProjectBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/${slug}/`);
    return await res.json();
  } catch (err) { return null; }
};

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/`);
    return await res.json();
  } catch (err) { return []; }
};

export const fetchBlogBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}/`);
    return await res.json();
  } catch (err) { return null; }
};

// Form data backend par submit karne ke liye
export const submitQuoteForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/quotes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return await res.json();
  } catch (err) {
    console.error("Form submission error:", err);
    return null;
  }
};

export const submitQuoteRequest = async (formState) => {
  const data = new FormData();
  
  const mapping = {
    country: formState.country || '',
    region: formState.region || '',
    postal: formState.postal || '',
    project_type: formState.projectType || '',
    service: formState.service || '',
    description: formState.description || '',
    estimated_value: formState.estimatedValue || '',
    project_location: formState.projectLocation || '',
    deadline: formState.deadline || null,
    full_name: formState.fullName || '',
    company_name: formState.companyName || '',
    email: formState.email || '',
    phone: formState.phone || '',
    preferred_contact: formState.preferredContact || 'Email',
  };

  Object.keys(mapping).forEach(key => {
    if (mapping[key] !== null && mapping[key] !== '') {
      data.append(key, mapping[key]);
    }
  });

  // Files append karna
  if (formState.files && formState.files.length > 0) {
    formState.files.forEach(file => {
      data.append('files', file);
    });
  }

  const response = await fetch(`${API_BASE_URL}/quotes/`, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Django Validation Errors:", errorData);
    throw new Error(JSON.stringify(errorData));
  }

  return await response.json();
};

export async function handleContactSubmit(e, form, validate, setSent) {
  e.preventDefault();

  if (validate && !validate()) return;

  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Contact form error:', errorData);
      throw new Error('Failed to send message');
    }

    setSent(true);
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again.');
  }
}