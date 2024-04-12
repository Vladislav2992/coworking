<template>
    <div class="page__pagination">
        <button class="pagination__btn-prev">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0.5L1.5 5.5L6.5 10.5" stroke="white"/>
            </svg>
        </button>
        <span class="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>...</span>
        <span>15</span>
        <button class="pagination__btn-next">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 10.5L5.5 5.5L0.500001 0.5" stroke="white"/>
            </svg>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .page__pagination {
        display: flex;
        gap: 18px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        span {
            font-size: 16px;
            color: var(--gray-text);
            cursor: pointer;
            transition: .3s;

            &:hover {
                color: var(--main-blue);
            }
            &.active{
                color: var(--white);
                background-color: var(--main-text);
                width: 24px;
                height: 24px;
                border-radius: 6px;
                padding: 3px 8px;
            }             
        }
    }

    .pagination__btn-prev,
    .pagination__btn-next {
        color: var(--white);
        background-color: var(--main-text);
        width: 24px;
        height: 24px;
        border-radius: 6px;
        transition: .3s;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>