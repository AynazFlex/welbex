import { FC } from "react";
import styled from "styled-components";
import telegram from "../../assets/logo/telegram.svg"
import whatsapp from "../../assets/logo/whatsapp.svg"
import phone from "../../assets/logo/phone.svg"


const FooterBlock = styled.footer`
    margin-top: 124px;
    padding-bottom: 20px;

    @media (max-width: 1172px) {
        padding: 0px 16px 20px 16px;
        margin-top: 100px;
    }

    @media (max-width: 440px) {
        margin-top: 41px;
        padding-bottom: 60px;
    }
`


const FooterItems = styled.div`
    display: flex;
    font-family: 'Inter', sans-serif;
    font-style: normal;

    @media (max-width: 1020px) {
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 875px) {
        gap: 30px;
    }

    @media (max-width: 440px) {
        flex-direction: column;
    }
`

const FooterItem = styled.div<{textAlign?: string, marginRight?: string}>`
    text-align: ${({textAlign}) => textAlign || 'left'};
    margin-right: ${({marginRight}) => marginRight || '0'};

    @media (max-width: 1020px) {
        margin-right: 10px;

        &:last-child {
            margin-right: 0px;
        }
    }

    @media (max-width: 875px) {
        &:last-child {
            margin-left: auto;
        }
    }

    @media (max-width: 440px) {
        text-align: left;
        margin: 0;

        &:last-child {
            margin: 0;
        }
    }
`

const TitleElem = styled.h3`
    margin: 0 0 20px 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #656566;

    @media (max-width: 440px) {
        font-size: 12px;
        line-height: 15px;
    }
`

const LinkElem = styled.li`
    color: #E4E5EA;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    list-style-type: none;
    & > a {
        color: inherit;
        text-decoration: none;
    }

    & > span, & > a {
        @media (max-width: 440px) {
            font-size: 14px;
            line-height: 17px;
        }
    }
`

const LinksContainer = styled.ul<{columns?: string, rows?: string, gap?: string}>`
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: ${({columns}) => columns};
    grid-template-rows: ${({rows}) => rows};
    gap: ${({gap}) => gap};

    @media (max-width: 440px) {
        &:nth-child(2) {
            gap: 10px 48px;
        }

        &:nth-child(3) {
            gap: 12px;
        }
    }
`

const ContacsElem = styled.div`
    display: flex;
    gap: 14px;
    justify-content: flex-end;

    & > a {
        text-decoration: none;
        & > img {
            display: block;
            height: 16px;

            @media (max-width: 440px) {
                height: 20px;
            }
        }
    }

    @media (max-width: 440px) {
        justify-content: flex-start;
    }
`

const CopyRightElem = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 5px;
    color: #E4E5EA;
    margin-top: 33px;
    text-align: right;

    & > a {
        color: inherit;
    }

    @media (max-width: 440px) {
        align-items: start;
        margin-top: 50px;
        text-align: left;
    }
`

const Footer: FC = () => (
    <FooterBlock>
    <FooterItems>
        <FooterItem marginRight='98px'>
            <TitleElem>
                О компании
            </TitleElem>
            <LinksContainer gap='10px'>
                <LinkElem>
                    <a href='#'>Партнёрская программа</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Вакансии</a>
                </LinkElem>
            </LinksContainer>
        </FooterItem>
        <FooterItem marginRight='auto'>
            <TitleElem>
                МЕНЮ
            </TitleElem>
            <LinksContainer columns='auto auto' rows='auto auto auto auto auto' gap='10px 52px'>
                <LinkElem>
                    <a href='#'>Расчёт стоимости</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Кейсы</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Услуги</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Благодарственные письма</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Виджеты</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Сертификаты</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Интеграции</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Блог на Youtube</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Наши клиенты</a>
                </LinkElem>
                <LinkElem>
                    <a href='#'>Вопрос / Ответ</a>
                </LinkElem>
            </LinksContainer>
        </FooterItem>
        <FooterItem textAlign="right">
            <TitleElem>
                КОНТАКТЫ
            </TitleElem>
            <LinksContainer gap='22px'>
                <LinkElem>
                    +7 555 555-55-55
                </LinkElem>
                <LinkElem>
                    <ContacsElem>
                        <a href='#'><img src={telegram} alt="telegram"/></a>
                        <a href='#'><img src={phone} alt="telegram"/></a>
                        <a href='#'><img src={whatsapp} alt="telegram"/></a>
                    </ContacsElem>
                </LinkElem>
                <LinkElem>
                    <span>Москва, Путевой проезд 3с1, к 902</span>
                </LinkElem>
            </LinksContainer>
        </FooterItem>
    </FooterItems>
    <CopyRightElem>
        <span>&copy;WELBEX 2022. Все права защищены.</span>
        <a href="#">Политика конфиденциальности</a>
    </CopyRightElem>
    </FooterBlock>
)

export default Footer