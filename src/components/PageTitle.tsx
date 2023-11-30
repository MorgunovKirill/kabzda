type PageTitlePropsType = {
    title: string
}

export const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h2 className='title'>
            {props.title}
        </h2>
    )
}
