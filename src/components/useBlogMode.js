'use client'

import { useEffect } from 'react'

/* Scope an 18px root to blog pages so the ported (18px-designed) CSS reads at
   full size; reverts on unmount, leaving the rest of the site at 16px. */
export const useBlogMode = () => {
  useEffect(() => {
    document.documentElement.classList.add('blog-mode')
    return () => document.documentElement.classList.remove('blog-mode')
  }, [])
}
