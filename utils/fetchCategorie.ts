export const fetchCategories = async () => {
    cosnt res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
    )
} 